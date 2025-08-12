// "use client";

// import { Mail, Phone, MapPin } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { useTranslation } from "@/lib/language-provider";

// export default function Contact() {
//   const { t } = useTranslation();
  
//   return (
//     <div className="flex justify-center">
//       <div className="max-w-2xl space-y-6 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle>{t.contactInfo}</CardTitle>
//               <CardDescription>
//                 {t.contactDesc}
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Mail className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">{t.email}</p>
//                   <p className="text-sm text-muted-foreground">dducthanh04@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Phone className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">{t.phone}</p>
//                   <p className="text-sm text-muted-foreground">05857626**</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
//                   <MapPin className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">{t.location}</p>
//                   <p className="text-sm text-muted-foreground">Hưng Yên, Việt Nam</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle>{t.letsConnect}</CardTitle>
//               <CardDescription>
//                 {t.connectDesc}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">
//                 {t.connectText}
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "@/lib/language-provider";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Xử lý gửi mail ở đây (gọi API backend)
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {t.contactMe || "Contact Me"}
              </CardTitle>
              <CardDescription>
                {t.contactDesc || "Fill out the form below to send me a message."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t.name || "Name"}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={"Your name"}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t.email || "Email"}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"your@email.com"}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {"Message"}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={"Write your message here..."}
                    rows={5}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <Button type="submit" className="w-full sm:w-auto">
                    {"Send"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
