import React, { useState } from 'react';
import { Gavel, Sparkles, Shield, AlertCircle, Loader2 } from 'lucide-react';
import { UserProfile } from '../types/auction';
import { signInWithGoogleOAuth } from '../firebase/authService';

interface GoogleSignInPageProps {
  onSignInSuccess: (user: UserProfile) => void;
}

export const GoogleSignInPage: React.FC<GoogleSignInPageProps> = ({
  onSignInSuccess,
}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleContinueWithGoogle = async () => {
    try {
      setIsAuthenticating(true);
      setErrorMessage(null);
      const user = await signInWithGoogleOAuth();
      onSignInSuccess(user);
    } catch (err: any) {
      console.error('Google Sign-In failed:', err);
      if (err?.code === 'auth/popup-closed-by-user') {
        setErrorMessage('Sign-in cancelled. Please click the button again to continue with Google.');
      } else if (err?.code === 'auth/popup-blocked') {
        setErrorMessage('Popup blocked by browser. Please allow popups for this site and try again.');
      } else {
        setErrorMessage(err?.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Stadium ambient light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Dedicated Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/90 border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-amber-500/10 backdrop-blur-xl text-center">
        {/* IPL Logo Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-1 mb-6 shadow-xl shadow-amber-500/25">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
            <Gavel className="w-10 h-10 text-amber-400" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> TATA IPL MEGA AUCTION 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
            IPL MOCK AUCTION
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
            Real-time multiplayer mock auction for friends. Claim a franchise, bid head-to-head, and master the RTM twist.
          </p>
        </div>

        {/* STRICT GOOGLE AUTH ONLY: Exactly ONE button */}
        <div className="space-y-4">
          <button
            onClick={handleContinueWithGoogle}
            disabled={isAuthenticating}
            className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-3.5 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer border border-slate-200 disabled:opacity-75 disabled:pointer-events-none"
          >
            {isAuthenticating ? (
              <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
            ) : (
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.58-5.17 3.58-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.15C3.26 21.36 7.36 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.27C.46 8.23 0 10.06 0 12s.46 3.77 1.27 5.39l4-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.27 6.61l4 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
            )}
            <span className="font-semibold text-slate-800">
              {isAuthenticating ? 'Connecting to Google...' : 'Continue with Google'}
            </span>
          </button>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-left text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-[11px] text-slate-500 font-tech">
            Google Firebase OAuth authentication. Your display name is automatically derived from your Google account.
          </p>
        </div>

        {/* Security / Verification Badge */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-2 text-slate-400 text-xs font-tech">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Firebase Google OAuth 2.0 Verified</span>
        </div>
      </div>
    </div>
  );
};
