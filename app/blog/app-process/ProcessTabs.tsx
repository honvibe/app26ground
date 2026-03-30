"use client";

import { useState } from "react";

const steps = [
  {
    id: "research",
    label: "Research",
    icon: "🔍",
    title: "1. Research — รู้ตลาดก่อนลงมือ",
    content: [
      { h: "App Store Autocomplete", p: "พิมพ์ keyword ใน App Store ดูว่าคนค้นหาอะไร จดคำที่ซ้ำบ่อย นี่คือ demand จริง" },
      { h: "วิเคราะห์คู่แข่ง", p: "ดู top 5-10 แอปในหมวด — ราคาเท่าไร, review บ่นอะไร, feature ไหนขาด เราเติมตรงนั้น" },
      { h: "Review Mining", p: "อ่าน review 1-3 ดาวของคู่แข่ง หา pain point ที่เราแก้ได้ นี่คือ competitive advantage" },
      { h: "ประเมิน Revenue Model", p: "ดูว่าคู่แข่งเก็บเงินยังไง — sub, IAP, ads? เราจะ position ราคาตรงไหน" },
    ],
  },
  {
    id: "prd",
    label: "PRD",
    icon: "📋",
    title: "2. PRD — เขียนก่อนทำ",
    content: [
      { h: "Problem & Solution", p: "1 ประโยคบอกว่าแอปแก้ปัญหาอะไร ถ้าอธิบายไม่ได้ = ยังไม่ชัด" },
      { h: "Feature List + Priority", p: "แบ่ง MVP (ต้องมี) vs Nice-to-have (ทำทีหลัง) ไม่ทำทุกอย่างพร้อมกัน" },
      { h: "Revenue Model", p: "ระบุราคา IAP/Sub ชัดเจน + Grandfather Policy ถ้ามี phase ต่อ" },
      { h: "Data Model", p: "ออกแบบ data structure — ใช้อะไรเก็บ (SwiftData, UserDefaults, JSON bundle)" },
      { h: "Phased Roadmap", p: "Phase 1 = MVP ทำเร็ว, Phase 2 = feature เพิ่ม, Phase 3 = AI/Premium" },
    ],
  },
  {
    id: "stitch",
    label: "Stitch",
    icon: "🧵",
    title: "3. Stitch — Mockup ก่อน Code",
    content: [
      { h: "HTML Mockup", p: "ใช้ Stitch gen HTML mockup ทุกหน้า — ดู layout, สี, font, spacing ก่อนเขียน Swift" },
      { h: "Design System", p: "กำหนด color palette, font, spacing, component ที่ใช้ซ้ำ เขียนเป็น AppDesign.swift" },
      { h: "Flow Diagram", p: "วาด user flow — เปิดแอปเจออะไร กดไปไหน ซื้อ IAP ตรงไหน" },
      { h: "Review กับตัวเอง", p: "ดู mockup แล้วถามว่า user จะงงไหม ต้องกดกี่ครั้งถึง core action" },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX",
    icon: "🎨",
    title: "4. UI/UX — SwiftUI Implementation",
    content: [
      { h: "สร้าง Xcode Project", p: "ตั้ง bundle ID ให้ตรง, เพิ่ม SPM packages (AdMob, Mixpanel), Info.plist keys" },
      { h: "Design System ใน Code", p: "สร้าง AppDesign.swift — สี, font, gradient, component ใช้ซ้ำทั้งแอป" },
      { h: "UI ทีละหน้า", p: "ทำตาม mockup — Home, Browse/List, Detail, Settings ทีละหน้า commit ทุกหน้า" },
      { h: "Dark Mode", p: "ทำ dark theme เป็น default — quotes/lifestyle แอปส่วนใหญ่ใช้ dark" },
    ],
  },
  {
    id: "code",
    label: "Code",
    icon: "💻",
    title: "5. Code — Logic & Data",
    content: [
      { h: "Core Logic", p: "เขียน business logic หลัก — data loading, user actions, state management" },
      { h: "StoreKit 2 IAP", p: "StoreManager — purchase, restore, sync to UserDefaults ใช้ Products.storekit v4 format" },
      { h: "Local Data", p: "SwiftData สำหรับ persistent data, UserDefaults สำหรับ settings/flags" },
      { h: "Share / Export", p: "ImageRenderer สำหรับ share card, UIActivityViewController สำหรับ share sheet" },
      { h: "Commit ทุก Feature", p: "ทยอย commit ไม่รวมเป็นก้อนใหญ่ เขียน message ชัดเจน" },
    ],
  },
  {
    id: "integration",
    label: "Integration",
    icon: "🔧",
    title: "6. Integration — ติดตั้งรายละเอียด",
    content: [
      { h: "ATT (App Tracking Transparency)", p: "ขอ permission ก่อน load ads — ใส่ใน onboarding flow ไม่ใช่ตอน launch" },
      { h: "Google UMP (CMP/GDPR)", p: "ConsentInformation.requestConsentInfoUpdate → ConsentForm.loadAndPresentIfRequired → แล้วค่อย MobileAds.start ไม่มี = restricted ad serving" },
      { h: "AdMob", p: "5 ad units: Banner, Interstitial, App Open, Native, Rewarded — grace period session แรก, frequency cap" },
      { h: "IAP", p: "สร้าง products ใน ASC, StoreKit Configuration v4, test ซื้อ/restore ได้จริง" },
      { h: "Notifications", p: "Local noti — เช้า/เย็น + re-engagement 3 วัน ขอ permission ใน onboarding" },
      { h: "Analytics (Mixpanel)", p: "Track events สำคัญ: app_open, core_action, purchase, share — ไม่ track ทุกอย่าง" },
      { h: "App Network SDK", p: "ฝัง AdNetworkManager.swift + configure + 3 บรรทัดใน AdManager สำหรับ cross-promote" },
      { h: "PrivacyInfo.xcprivacy", p: "Privacy Manifest ต้องมีทุกแอป — NSPrivacyTracking, AccessedAPITypes, CollectedDataTypes" },
    ],
  },
  {
    id: "test",
    label: "Test",
    icon: "🧪",
    title: "7. Test — เช็คก่อน Submit",
    content: [
      { h: "Core Flow", p: "ทดสอบ flow หลักตั้งแต่เปิดแอปจนถึง action สำคัญ — ต้องไม่ crash" },
      { h: "IAP Test", p: "ซื้อทุก product ใน Sandbox — Remove Ads, Pro, Bundle + Restore Purchases" },
      { h: "Ads Test", p: "ดู interstitial ขึ้นตาม frequency, banner แสดง, app open ทำงาน" },
      { h: "Responsive Check", p: "เช็คทุกหน้า — iPhone SE (จอเล็ก), iPhone 16 (มาตรฐาน), Pro Max (จอใหญ่), iPad ใช้ horizontalSizeClass + DeviceScale แก้ตอนนี้ทีเดียวจบ ไม่ต้องวนแก้ซ้ำ" },
      { h: "First Launch", p: "ลบแอป install ใหม่ — onboarding ขึ้นไหม, data เริ่มใหม่ไหม" },
      { h: "Settings ครบ", p: "Rate App, More Apps, Privacy Policy, Contact, Restore, Version — ทุกปุ่มกดได้" },
    ],
  },
  {
    id: "aso",
    label: "ASO",
    icon: "📊",
    title: "8. ASO — App Store Optimization",
    content: [
      { h: "Keyword Research", p: "ใช้ Autocomplete + คู่แข่ง + Apple Search Ads data ห้ามมโนคำค้น" },
      { h: "Name (30 chars)", p: "ชื่อแอป + keyword หลัก เช่น 'Daily Quotes Motivation & Life'" },
      { h: "Subtitle (30 chars)", p: "keyword รอง ที่ Name ใส่ไม่หมด" },
      { h: "Keywords (100 chars)", p: "คั่นด้วย comma ไม่เว้นวรรค ไม่ซ้ำกับ Name/Subtitle" },
      { h: "Description", p: "เขียนให้คนอ่าน ไม่ใช่ keyword stuffing — feature list ชัด, pricing ชัด" },
      { h: "Localization", p: "ทำอย่างน้อย 5-8 locales (EN, FR, DE, ES, IT, NL, PT, JA) เพิ่ม reach" },
      { h: "ห้ามโกหก", p: "ห้ามใส่ feature ที่ยังไม่มี (widget, AI) ห้ามเกิน จำนวนจริง ห้าม emoji" },
    ],
  },
  {
    id: "screenshot",
    label: "Screenshot",
    icon: "📸",
    title: "9. Screenshot — หน้าตาบน Store",
    content: [
      { h: "5 Screenshots", p: "SS1-3 มี text headline + subtitle, SS4-5 ใช้ภาพ 3D หรือ mockup" },
      { h: "Headline สั้น ได้ใจ", p: "2-5 คำ ที่บอก value ทันที เช่น 'Words That Move You'" },
      { h: "Subtitle อธิบาย", p: "1 บรรทัดบอกว่าได้อะไร เช่น '2,000 quotes. Swipe for daily inspiration.'" },
      { h: "Device Frame", p: "ใส่ mockup iPhone frame ให้ดู professional" },
      { h: "iPad Screenshots", p: "ถ้า support iPad ต้องมี screenshot แยก" },
    ],
  },
  {
    id: "launch",
    label: "Launch",
    icon: "🚀",
    title: "10. Launch — Submit & Monitor",
    content: [
      { h: "Pre-submit Checklist", p: "Archive → Upload → เลือก Build → กรอก What's New → Age Rating → Encryption → Submit" },
      { h: "App Privacy", p: "กรอก Data Types ใน ASC ให้ตรงกับ PrivacyInfo.xcprivacy" },
      { h: "StoreKit Config → None", p: "ก่อน Archive ปิด StoreKit Configuration ใน Scheme ไม่งั้น production IAP ไม่ทำงาน" },
      { h: "Monitor หลัง Launch", p: "เช็ค Apple Analytics impressions + AdMob revenue + crash reports 3 วันแรก" },
      { h: "ASO Iterate", p: "หลังมี data 1-2 สัปดาห์ ดู keyword ไหน perform สลับคำที่ไม่ดีออก" },
      { h: "Update Plan", p: "วาง v2.1 roadmap — feature ถัดไปจาก user feedback + review mining" },
    ],
  },
];

export default function ProcessTabs() {
  const [openId, setOpenId] = useState<string | null>("research");

  function toggle(id: string) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const isOpen = openId === step.id;
        return (
          <div key={step.id}>
            {/* Step button — big clickable block */}
            <button
              onClick={() => toggle(step.id)}
              className={`w-full text-left rounded-xl p-5 transition-all ${
                isOpen
                  ? "bg-accent/10 border-2 border-accent/40"
                  : "bg-bg-surface border border-border-default hover:border-border-hover"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <span className="text-text-muted text-xs font-mono">
                      STEP {index + 1}
                    </span>
                    <h3
                      className={`text-lg font-bold ${
                        isOpen ? "text-accent" : "text-text-primary"
                      }`}
                    >
                      {step.label}
                    </h3>
                  </div>
                </div>
                <span
                  className={`text-xl text-text-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </div>
            </button>

            {/* Content — expand */}
            {isOpen && (
              <div className="mt-2 ml-4 border-l-2 border-accent/20 pl-6 space-y-3 pb-2">
                {step.content.map((item, i) => (
                  <div key={i} className="bg-bg-surface border border-border-default rounded-lg p-4">
                    <h4 className="text-sm font-bold text-accent mb-1">{item.h}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.p}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
