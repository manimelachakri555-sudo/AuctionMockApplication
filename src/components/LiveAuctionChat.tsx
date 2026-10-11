import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Users, Sparkles, Flame, Gavel, Zap, Smile } from 'lucide-react';
import { ChatMessage, TeamId, UserProfile, AuctionRoomState } from '../types/auction';
import { IPL_TEAMS } from '../data/teamsData';

interface LiveAuctionChatProps {
  room: AuctionRoomState;
  user: UserProfile;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
}

const QUICK_BANTERS = [
  '🔨 Hammer it!',
  '💸 Out of purse!',
  '⚡ Use RTM!',
  '🔥 Big player!',
  '👀 Pass on this one',
  '🚀 Bid higher!',
  '🤝 Steal deal!',
];

export const LiveAuctionChat: React.FC<LiveAuctionChatProps> = React.memo(({
  room,
  user,
  messages = [],
  onSendMessage,
}) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleQuickBanter = (banter: string) => {
    onSendMessage(banter);
  };

  // Connected friends in room
  const activeFranchises = Object.values(room.teams).filter(
    (t) => t.isConnected || !!t.ownerUserId
  );

  return (
    <div className="bg-[#0A0E1A] border-2 border-slate-800 rounded-3xl shadow-xl flex flex-col h-[520px] overflow-hidden">
      {/* Header */}
      <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
              <span>WAR ROOM CHAT</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </h3>
            <p className="text-[10px] font-tech text-slate-400">
              Live Auction Banter & Strategy
            </p>
          </div>
        </div>

        {/* Online friends badge */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-slate-800 text-[10px] font-tech text-slate-300">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>{activeFranchises.length || 1} Friends In Room</span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-3 font-tech text-xs">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 p-6 space-y-2">
            <MessageSquare className="w-8 h-8 text-slate-600 mb-1" />
            <p className="font-bold text-slate-400">No chat messages yet!</p>
            <p className="text-[11px] text-slate-500 max-w-[200px]">
              Chat live with your friends during bidding, send reactions, or challenge their purse!
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.senderId === user.id;
            const team = msg.teamId ? IPL_TEAMS[msg.teamId] : null;
            const timeStr = new Date(msg.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
              >
                {/* Sender Name & Franchise Badge */}
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  {team && (
                    <span
                      className="px-1.5 py-0.2 rounded text-[9px] font-bold text-white shadow"
                      style={{ backgroundColor: team.primaryColor }}
                    >
                      {team.shortName}
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-slate-300">
                    {isMe ? 'You' : msg.senderName}
                  </span>
                  <span className="text-[9px] text-slate-500">{timeStr}</span>
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] px-3.5 py-2 rounded-2xl break-words leading-relaxed text-xs shadow-md ${
                    isMe
                      ? 'bg-gradient-to-r from-amber-500/25 to-pink-500/25 border border-amber-500/40 text-slate-100 rounded-tr-xs'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Banter Chips */}
      <div className="px-3 py-1.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {QUICK_BANTERS.map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => handleQuickBanter(b)}
            className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-tech text-slate-300 hover:text-white whitespace-nowrap cursor-pointer transition-colors shrink-0"
          >
            {b}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={handleSend}
        className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Chat with friends in room..."
          maxLength={300}
          className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-tech text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-400/80 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 cursor-pointer transition-all shrink-0 shadow"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
});
