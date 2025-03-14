"use client"; // Ensures it's only rendered on the client side

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";

export default function SocialMediaDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
        Connect with Me
      </DialogTrigger>
      <DialogContent className="p-8 rounded-lg shadow-2xl max-w-md bg-gradient-to-r from-gray-100 to-gray-400">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6 text-gray-800">
            Let&apos;s Connect!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-5">
          <a
            href="https://github.com/priyanshu-tiwariii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all shadow-md hover:shadow-lg"
          >
            <FaGithub className="w-7 h-7" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-tiwarii/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            <FaLinkedin className="w-7 h-7" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          <a
            href="https://x.com/iampriyanshu29"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-950 text-white hover:from-gray-800 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
          >
            <FaX className="w-6 h-6" />
            <span className="text-lg font-semibold">Twitter</span>
          </a>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}