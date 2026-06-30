import { Github, Linkedin, Instagram } from "lucide-react";

export const socials = [
{
  name: "GitHub",
  url: "https://github.com/AvinashUmrao",
  icon: Github,
},
{
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/avinash-umrao-5184182b9/",
  icon: Linkedin,
},
{
  name: "Instagram",
  url: "https://www.instagram.com/avinash__umrao/",
  icon: Instagram,
},
];

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
};
