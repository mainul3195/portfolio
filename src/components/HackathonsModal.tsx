"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import {
  FaLaptopCode,
  FaHackerrank,
  FaCode,
  FaLaptop,
  FaGithub,
} from "react-icons/fa";
import { lockScroll, unlockScroll } from "@/utils/scrollLock";

interface HackathonsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HackathonsModal({
  isOpen,
  onClose,
}: HackathonsModalProps) {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [isOpen]);

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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
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
                    <div className="p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
                      <FaLaptopCode className="w-8 h-8 text-purple-300" />
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold text-white/90"
                    >
                      Hackathon Participations
                    </Dialog.Title>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="space-y-8">
                    {/* NSU Hackathon */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-500/10 rounded-lg mt-1">
                        <FaCode className="w-5 h-5 text-purple-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-purple-300/90 mb-3">
                          North South University Hackathon
                        </h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300">
                            Reached Top 10 in the competition
                          </li>
                          <li className="text-slate-300">
                            Developed innovative solutions under tight deadlines
                          </li>
                          <li className="text-slate-300">
                            Collaborated with team members to create working
                            prototypes
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Leading University Hackathon */}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                        <FaLaptop className="w-5 h-5 text-blue-300/80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300/90 mb-3">
                          Leading University Hackathon
                        </h4>
                        <ul className="list-none space-y-2">
                          <li className="text-slate-300">
                            Participated and gained valuable development
                            experience
                          </li>
                          <li className="text-slate-300">
                            Improved problem-solving skills in a competitive
                            environment
                          </li>
                          <li className="text-slate-300">
                            Applied technical knowledge to real-world challenges
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 hover:bg-purple-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 transition-all duration-200"
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
