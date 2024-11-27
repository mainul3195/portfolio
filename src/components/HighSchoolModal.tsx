'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaPalette, FaChess, FaAward, FaBookOpen } from 'react-icons/fa';

interface HighSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HighSchoolModal({ isOpen, onClose }: HighSchoolModalProps) {
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
                    <div className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg">
                      <FaAward className="w-8 h-8 text-emerald-300" />
                    </div>
                    <Dialog.Title as="h3" className="text-3xl font-bold text-white/90">
                      High School Achievements
                    </Dialog.Title>
                  </div>
                  <p className="text-slate-400 text-sm">A foundation of excellence</p>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="space-y-8">
                    {/* Art & Drawing Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg mt-1">
                        <FaPalette className="w-5 h-5 text-emerald-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-300/90 mb-2">Art & Drawing</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>District Champion at Secondary level Drawing Competition - Bangladesh Shisu Academy</span>
                          </li>
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>20+ achievements in School level drawing competitions</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Islamic Competitions Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg mt-1">
                        <FaBookOpen className="w-5 h-5 text-emerald-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-300/90 mb-2">Islamic Competitions</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>Multiple achievements in Hamd & Na'at Recitation</span>
                          </li>
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>Recognition in Azan Competition</span>
                          </li>
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>Excellence in Qira'at Competition</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Chess Section */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg mt-1">
                        <FaChess className="w-5 h-5 text-emerald-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-300/90 mb-2">Chess</h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-300/60 mt-1">•</span>
                            <span>Top 20 in District Chess Workshop</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <p className="text-slate-400 text-sm italic max-w-lg">
                    These achievements represent a strong foundation in arts, spirituality, and strategic thinking, 
                    demonstrating excellence across diverse fields.
                  </p>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-all duration-200"
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
