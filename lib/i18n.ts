'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Language = 'en' | 'vi' | 'zh';

type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const translations = {
  en: {
    // Personal info
    name: 'Nguyen Duc Thanh',
    
    // Navbar
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero
    greeting: "Hi, I'm",
    role: "Software Developer | University Dai Nam",
    bio: "I'm an Information Technology student and this is my website created to store some information about me.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    
    // Experience
    workExperience: "Work Experience",
    
    // Projects
    projectsTitle: "Projects",
    liveDemo: "Live Demo",
    code: "Code",
    
    // Contact
    getInTouch: "Get In Touch",
    contactInfo: "Contact Information",
    contactDesc: "Feel free to reach out through any of these channels.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    letsConnect: "Let's Connect",
    connectDesc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    connectText: "Whether you have a question, want to start a project, or simply want to connect, feel free to reach out. I'll try my best to get back to you as soon as possible.",
    
    // Footer
    rights: "All rights reserved."
  },
  vi: {
    // Personal info
    name: 'Nguyễn Đức Thanh',
    
    // Navbar
    home: 'Trang chủ',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
    
    // Hero
    greeting: "Xin chào, tôi là",
    role: "Lập trình viên | Đại học Đại Nam",
    bio: "Tôi là sinh viên Công nghệ Thông tin và đây là trang web của tôi được tạo ra để lưu trữ một số thông tin về bản thân.",
    contactMe: "Liên hệ với tôi",
    viewProjects: "Xem dự án",
    
    // Experience
    workExperience: "Kinh nghiệm làm việc",
    
    // Projects
    projectsTitle: "Dự án",
    liveDemo: "Xem demo",
    code: "Mã nguồn",
    
    // Contact
    getInTouch: "Liên lạc",
    contactInfo: "Thông tin liên hệ",
    contactDesc: "Hãy liên hệ với tôi qua bất kỳ kênh nào dưới đây.",
    email: "Email",
    phone: "Điện thoại",
    location: "Địa điểm",
    letsConnect: "Hãy kết nối",
    connectDesc: "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn.",
    connectText: "Cho dù bạn có câu hỏi, muốn bắt đầu một dự án, hoặc đơn giản là muốn kết nối, hãy liên hệ với tôi. Tôi sẽ cố gắng phản hồi sớm nhất có thể.",
    
    // Footer
    rights: "Đã đăng ký Bản quyền."
  },
  zh: {
    // Personal info
    name: '阮德清',
    
    // Navbar
    home: '首頁',
    experience: '經驗',
    projects: '專案',
    contact: '聯繫',
    
    // Hero
    greeting: "嗨，我是",
    role: "軟體開發人員 | 大南大學",
    bio: "我是一名資訊科技學生，這是我創建的網站，用來存儲一些關於我的信息。",
    contactMe: "聯繫我",
    viewProjects: "查看專案",
    
    // Experience
    workExperience: "工作經驗",
    
    // Projects
    projectsTitle: "專案",
    liveDemo: "在線演示",
    code: "程式碼",
    
    // Contact
    getInTouch: "取得聯繫",
    contactInfo: "聯繫信息",
    contactDesc: "請隨時通過以下任何渠道與我聯繫。",
    email: "電子郵件",
    phone: "電話",
    location: "位置",
    letsConnect: "讓我們連接",
    connectDesc: "我始終願意討論新項目、創意想法或成為您願景的一部分的機會。",
    connectText: "無論您有問題，想開始一個項目，或者只是想聯繫，請隨時與我聯繫。我會盡力盡快回复您。",
    
    // Footer
    rights: "版權所有。"
  }
};