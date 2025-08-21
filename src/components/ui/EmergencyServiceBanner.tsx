'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface EmergencyService {
  icon: string;
  title: string;
  description: string;
  phone: string;
  available: boolean;
}

export default function EmergencyServiceBanner() {
  const t = useTranslations();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Check if it's outside normal business hours (8 AM - 8 PM)
  const isEmergencyHours = () => {
    const hour = currentTime.getHours();
    return hour < 8 || hour >= 20;
  };

  const emergencyServices: EmergencyService[] = [
    {
      icon: '💧',
      title: 'Water Leak Emergency',
      description: 'Burst pipes, major leaks, flooding',
      phone: '+84-XXX-XXX-001',
      available: true
    },
    {
      icon: '⚡',
      title: 'Electrical Emergency',
      description: 'Power outages, electrical hazards, short circuits',
      phone: '+84-XXX-XXX-002',
      available: true
    },
    {
      icon: '🔥',
      title: 'Gas Leak Emergency',
      description: 'Gas leaks, heating system failures',
      phone: '+84-XXX-XXX-003',
      available: true
    },
    {
      icon: '❄️',
      title: 'AC Emergency',
      description: 'AC breakdown in extreme weather',
      phone: '+84-XXX-XXX-004',
      available: currentTime.getMonth() >= 3 && currentTime.getMonth() <= 9 // Apr-Oct
    }
  ];

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 left-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg z-40 animate-pulse"
      >
        🚨 Emergency
      </button>
    );
  }

  return (
    <>
      {/* Emergency Banner */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isEmergencyHours() ? 'bg-red-600' : 'bg-orange-600'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <div className="animate-pulse">
                <span className="text-white text-2xl">🚨</span>
              </div>
              <div className="text-white">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-sm md:text-base">
                    24/7 EMERGENCY SERVICE
                  </span>
                  {isEmergencyHours() && (
                    <span className="bg-red-800 text-xs px-2 py-1 rounded-full">
                      AFTER HOURS
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-white/90">
                  Available now • Response time: 30-60 minutes
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="tel:+84XXXXXXXXX"
                className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-colors flex items-center space-x-2"
              >
                <span>📞</span>
                <span className="hidden md:inline">Call Now</span>
              </a>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
              >
                {isExpanded ? '−' : '+'}
              </button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
              >
                ×
              </button>
            </div>
          </div>

          {/* Expanded Emergency Services */}
          {isExpanded && (
            <div className="pb-4 border-t border-white/20 pt-4 animate-slideDown">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {emergencyServices.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 ${
                      !service.available ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {service.title}
                        </h4>
                        {service.available ? (
                          <span className="text-green-300 text-xs">Available Now</span>
                        ) : (
                          <span className="text-gray-300 text-xs">Seasonal Service</span>
                        )}
                      </div>
                    </div>
                    <p className="text-white/80 text-xs mb-3">{service.description}</p>
                    {service.available ? (
                      <a
                        href={`tel:${service.phone}`}
                        className="block text-center py-2 px-3 rounded text-xs font-medium transition-colors bg-white text-red-600 hover:bg-red-50"
                      >
                        Call {service.phone}
                      </a>
                    ) : (
                      <div className="block text-center py-2 px-3 rounded text-xs font-medium bg-white/50 text-white cursor-not-allowed">
                        Not Available
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-white/90 text-sm mb-2">
                  <strong>Emergency Rates Apply:</strong> Additional fees may apply for after-hours service
                </p>
                <div className="flex justify-center space-x-4 text-xs text-white/80">
                  <span>• Weekends: +20%</span>
                  <span>• After 10 PM: +30%</span>
                  <span>• Holidays: +50%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Emergency Button (Alternative display) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          <a
            href="tel:+84XXXXXXXXX"
            className="block w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-110 group"
          >
            <span className="text-2xl animate-pulse">🚨</span>
          </a>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-black bg-opacity-90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
              24/7 Emergency Service
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-opacity-90"></div>
            </div>
          </div>

          {/* Pulse rings */}
          <div className="absolute inset-0 w-16 h-16 bg-red-600 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute inset-0 w-16 h-16 bg-red-600 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
        </div>
      </div>

      {/* Emergency Info Modal Trigger */}
      {isEmergencyHours() && (
        <div className="fixed bottom-24 right-6 z-40">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 max-w-xs shadow-lg">
            <div className="flex items-start space-x-2">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <div>
                <p className="text-yellow-800 text-sm font-semibold mb-1">
                  After Hours Service
                </p>
                <p className="text-yellow-700 text-xs">
                  Emergency rates apply. Regular service resumes at 8 AM.
                </p>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-yellow-600 hover:text-yellow-800 text-xs mt-1 underline"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}