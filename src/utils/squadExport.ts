import { AuctionRoomState, IPLTeam, Player } from '../types/auction';
import { formatLakhsToINR } from './auctionCalculations';

/**
 * Trigger browser file download for text/csv/json data
 */
export function triggerFileDownload(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export all squads to comprehensive CSV
 */
export function exportSquadsToCSV(room: AuctionRoomState) {
  const headers = [
    'Franchise Code',
    'Franchise Name',
    'Owner / Manager',
    'Player Name',
    'Role / Category',
    'Specialism',
    'Country',
    'Nationality Type',
    'Set Number',
    'Set Code',
    'Base Price (Lakhs)',
    'Sold Price (Lakhs)',
    'Sold Price (Formatted)',
    'Contract Status',
    'Matches',
    'Runs',
    'Batting Strike Rate',
    'Batting Average',
    'Wickets',
    'Bowling Economy',
    'Skill Rating',
    'Recent Form',
  ];

  const rows: string[][] = [];

  const teams = Object.values(room.teams || {}).filter(
    (t) => t.isActive !== false && (room.activeTeamIds ? room.activeTeamIds.includes(t.id) : true)
  );

  teams.forEach((team) => {
    if (!team.squad || team.squad.length === 0) {
      rows.push([
        team.shortName,
        `"${team.name}"`,
        `"${team.ownerName || 'BCCI Table Representative'}"`,
        'No players signed yet',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '0',
        '0',
        '₹0',
        'EMPTY',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '-',
      ]);
      return;
    }

    team.squad.forEach((player) => {
      const priceLakhs = player.soldPrice || player.basePrice || 0;
      const formattedPrice = formatLakhsToINR(priceLakhs);
      const isOverseas = player.isOverseas || (player.country && player.country.toLowerCase() !== 'india');

      rows.push([
        team.shortName,
        `"${team.name}"`,
        `"${team.ownerName || 'BCCI Table Representative'}"`,
        `"${player.name}"`,
        `"${player.role || player.specialism || 'Player'}"`,
        `"${player.specialism || player.role || '-'}"`,
        `"${player.country || 'India'}"`,
        isOverseas ? 'Overseas' : 'Domestic (India)',
        String(player.setNumber || player.setNo || '-'),
        `"${player.setCode || '-'}"`,
        String(player.basePrice || 0),
        String(player.soldPrice || 0),
        `"${formattedPrice}"`,
        player.status || 'SOLD',
        String(player.stats?.matches || 0),
        String(player.stats?.runs || 0),
        String(player.stats?.strikeRate || 0),
        String(player.stats?.average || player.stats?.battingAvg || 0),
        String(player.stats?.wickets || 0),
        String(player.stats?.economy || 0),
        String(player.rating || player.hiddenFormRating || 80),
        `"${player.form?.formSummary || player.hiddenFormRating || 'Good'}"`,
      ]);
    });
  });

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const dateStr = new Date().toISOString().slice(0, 10);
  triggerFileDownload(csvContent, `IPL2026_Squads_Export_${room.roomCode}_${dateStr}.csv`, 'text/csv');
}

/**
 * Export single team squad to CSV
 */
export function exportSingleTeamToCSV(team: IPLTeam) {
  const headers = [
    'Player Name',
    'Role',
    'Specialism',
    'Country',
    'Type',
    'Set',
    'Price (Lakhs)',
    'Price (INR)',
    'Status',
    'Matches',
    'Runs',
    'Strike Rate',
    'Average',
    'Wickets',
    'Economy',
    'Rating',
  ];

  const rows = (team.squad || []).map((p) => [
    `"${p.name}"`,
    `"${p.role || '-'}"`,
    `"${p.specialism || '-'}"`,
    `"${p.country || 'India'}"`,
    p.isOverseas ? 'Overseas' : 'Domestic',
    `"${p.setCode || String(p.setNumber || '-')}"`,
    String(p.soldPrice || p.basePrice || 0),
    `"${formatLakhsToINR(p.soldPrice || p.basePrice || 0)}"`,
    p.status || 'SOLD',
    String(p.stats?.matches || 0),
    String(p.stats?.runs || 0),
    String(p.stats?.strikeRate || 0),
    String(p.stats?.average || p.stats?.battingAvg || 0),
    String(p.stats?.wickets || 0),
    String(p.stats?.economy || 0),
    String(p.rating || p.hiddenFormRating || 80),
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  triggerFileDownload(csvContent, `${team.shortName}_Squad_Stats_IPL2026.csv`, 'text/csv');
}

/**
 * Export all squads to JSON for programmatic reporting
 */
export function exportSquadsToJSON(room: AuctionRoomState) {
  const exportData = {
    exportedAt: new Date().toISOString(),
    roomCode: room.roomCode,
    gameMode: room.gameMode,
    stage: room.stage,
    teams: Object.values(room.teams || {}).map((t) => ({
      id: t.id,
      name: t.name,
      shortName: t.shortName,
      owner: t.ownerName || 'BCCI Table Representative',
      initialPurseLakhs: t.initialPurse,
      remainingPurseLakhs: t.purse,
      spentPurseLakhs: t.initialPurse - t.purse,
      totalPlayers: t.squad.length,
      overseasCount: t.squad.filter((p) => p.isOverseas || (p.country && p.country.toLowerCase() !== 'india')).length,
      rtmsRemaining: t.rtmCardsRemaining,
      squad: t.squad.map((p) => ({
        id: p.id,
        name: p.name,
        role: p.role,
        specialism: p.specialism,
        country: p.country,
        isOverseas: !!p.isOverseas,
        basePrice: p.basePrice,
        soldPrice: p.soldPrice,
        stats: p.stats,
        rating: p.rating || p.hiddenFormRating || 80,
        form: p.form,
      })),
    })),
  };

  const jsonContent = JSON.stringify(exportData, null, 2);
  const dateStr = new Date().toISOString().slice(0, 10);
  triggerFileDownload(jsonContent, `IPL2026_Full_Squads_Data_${room.roomCode}_${dateStr}.json`, 'application/json');
}
