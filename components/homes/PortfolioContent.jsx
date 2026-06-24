"use client";

import { filterButtons, portfolioData } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioContent() {
  const [filteredItem, setFilteredItem] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredItem(portfolioData);
    } else {
      setFilteredItem(
        portfolioData.filter((elm) => elm.category.includes(activeTab)),
      );
    }
  }, [activeTab]);

  return (
    <>
      <Navbar />

      {/* Modal — rendered outside main so fixed positioning works */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <i className="fa-regular fa-xmark"></i>
            </button>

            <h2 className="text-xl font-bold text-ink mb-4">
              {modalContent?.title}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                  Project
                </p>
                <p className="text-sm text-ink font-medium">
                  {modalContent?.project}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                  Client
                </p>
                <p className="text-sm text-ink font-medium">
                  {modalContent?.client}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                  Languages
                </p>
                <p className="text-sm text-ink font-medium">
                  {modalContent?.languages?.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                  Preview
                </p>
                {modalContent?.previewLink ? (
                  <a
                    href={modalContent.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    {modalContent.previewName}
                  </a>
                ) : (
                  <p className="text-sm text-ink font-medium">
                    {modalContent?.previewName}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4 space-y-2">
              {modalContent?.desc.map((d, i) => (
                <p
                  key={i}
                  className="text-sm text-ink-muted dark:text-slate-400 leading-relaxed"
                >
                  {d}
                </p>
              ))}
            </div>

            {modalContent?.imgSrc && (
              <Image
                src={modalContent.imgSrc}
                alt={modalContent.title}
                width={800}
                height={450}
                className="w-full rounded-lg object-cover"
              />
            )}
          </div>
        </div>
      )}

      <main className="page-enter max-w-4xl mx-auto px-4 py-12 mt-16">
        {/* Header */}
        <h1 className="section-title">Portfolio</h1>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterButtons.map((elm) => (
            <button
              key={elm.id}
              onClick={() => setActiveTab(elm.text)}
              className={`filter-btn ${activeTab === elm.text ? "active" : ""}`}
            >
              {elm.text}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItem.map((elm) => (
              <motion.div
                layout
                key={elm.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="card overflow-hidden p-0 cursor-pointer"
                  onClick={() => {
                    setModalContent(elm);
                    setShowModal(true);
                  }}
                >
                  <Image
                    src={elm.imgSrc}
                    alt={elm.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs text-accent font-semibold">
                      {elm.subtitle}
                    </span>
                    <h3 className="text-sm font-bold text-ink mt-1">
                      {elm.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="site-footer mt-16">
          <span>© {year} All Rights Reserved by PWTeam.</span>
        </footer>
      </main>
    </>
  );
}
