'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaLaptopCode, FaTrophy, FaCode, FaMedal } from 'react-icons/fa';

interface CompetitiveProgrammingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompetitiveProgrammingModal({ isOpen, onClose }: CompetitiveProgrammingModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all border border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg">
                      <FaLaptopCode className="w-8 h-8 text-blue-300" />
                    </div>
                    <Dialog.Title as="h3" className="text-3xl font-bold text-white/90">
                      Competitive Programming
                    </Dialog.Title>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="space-y-8">
                    {/* Overview Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                        <FaCode className="w-5 h-5 text-blue-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300/90 mb-3">Overview</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300">
                            Solved more than 2500 problems in different online judges
                          </li>
                          <li className="text-slate-300">
                            Expert (max 1815) in Codeforces
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Participations Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                        <FaMedal className="w-5 h-5 text-blue-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300/90 mb-3">Participations</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300">Fourteen Inter University Programming Contests</li>
                          <li className="text-slate-300">ICPC Dhaka Regional 2020, 2021, and 2023</li>
                          <li className="text-slate-300">2023 ICPC Asia West Continent Final Contest</li>
                          <li className="text-slate-300">National Collegiate Programming Contest 2023</li>
                          <li className="text-slate-300">SRBD Code Contest 2023 final round (Top 50)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Special Mention Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                        <FaTrophy className="w-5 h-5 text-blue-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300/90 mb-3">Special Mention</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300">6th in CoU-BRACNet Inter University Programming Contest 2023</li>
                          <li className="text-slate-300">2nd Runner Up at Sylhet Bondhushova Programming Contest hosted by Leading University</li>
                          <li className="text-slate-300">Officially 15th at ICPC Dhaka Regional 2023</li>
                          <li className="text-slate-300">11th in SEC Junior Programming Contest</li>
                          <li className="text-slate-300">21th in NCPC 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
