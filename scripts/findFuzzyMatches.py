import json
import re

with open('src/data/official350Players.json', 'r') as f:
    off_players = json.load(f)

with open('src/data/masterPlayersDatabase.json', 'r') as f:
    master_players = json.load(f)

with open('src/data/teamsSquads2026.json', 'r') as f:
    squads = json.load(f)

all_reference = {}
for p in off_players:
    img = p.get('imageUrl') or p.get('photo')
    is_real = img and 'dicebear' not in img
    all_reference[p['id']] = {
        'id': p['id'],
        'name': p['name'],
        'img': img if is_real else None,
        'source': 'OFFICIAL_AUCTION_POOL'
    }

for p in master_players:
    img = p.get('imageUrl') or p.get('photo')
    is_real = img and 'dicebear' not in img
    if p['id'] not in all_reference or not all_reference[p['id']]['img']:
        all_reference[p['id']] = {
            'id': p['id'],
            'name': p['name'],
            'img': img if is_real else None,
            'source': 'MASTER_DB'
        }

def normalize_key(s):
    if not s:
        return ''
    s = s.lower()
    s = s.replace('é', 'e').replace('è', 'e').replace('á', 'a').replace('ó', 'o')
    s = re.sub(r'[^a-z0-9]', '', s)
    return s

def name_tokens(s):
    if not s:
        return set()
    s = s.lower()
    s = s.replace('é', 'e').replace('è', 'e')
    parts = re.split(r'[^a-z0-9]+', s)
    return set(p for p in parts if p)

print("Total reference players with known images:", len([p for p in all_reference.values() if p['img']]))

# Check each squad player
for team_id, players in squads.items():
    for sp in players:
        sp_img = sp.get('imageUrl') or sp.get('photo')
        sp_has_img = sp_img and 'dicebear' not in sp_img
        
        sp_norm = normalize_key(sp['name'])
        sp_tokens = name_tokens(sp['name'])
        
        # Exact ID match
        found = all_reference.get(sp['id'])
        
        # If not found or no img, check name matching
        if not found or not found['img']:
            for ref_id, ref in all_reference.items():
                if not ref['img']:
                    continue
                ref_norm = normalize_key(ref['name'])
                ref_tokens = name_tokens(ref['name'])
                
                # Check match criteria:
                # 1. Exact normalized name
                # 2. Reordered tokens (e.g. Yarra Prithviraj vs Prithviraj Yarra)
                # 3. Varun Chakravarthy vs Varun Chakaravarthy
                if sp_norm == ref_norm:
                    print(f"Found match by exact norm: {team_id} {sp['name']} ({sp['id']}) -> {ref['name']} ({ref['id']})")
                    break
                elif sp_tokens and ref_tokens and sp_tokens == ref_tokens:
                    print(f"Found match by tokens: {team_id} {sp['name']} ({sp['id']}) -> {ref['name']} ({ref['id']})")
                    break
                elif len(sp_tokens) >= 2 and len(ref_tokens) >= 2:
                    if sp_tokens.issubset(ref_tokens) or ref_tokens.issubset(sp_tokens):
                        print(f"Subset match: {team_id} {sp['name']} ({sp['id']}) -> {ref['name']} ({ref['id']})")
                        break
