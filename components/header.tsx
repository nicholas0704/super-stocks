import { RxExternalLink } from "react-icons/rx";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  return (
    <div className="flex px-6 py-4 justify-between absolute left-0 right-0 z-[100]">
      <div className="flex space-x-2">
        <p className="font-bold font-mono">SUPERSTOCKS</p>
        <p className="text-muted-foreground font-mono">v0.1</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/nicholasdev0722/super-stocks"
          className="font-mono flex space-x-2 items-center cursor-pointer hover:opacity-30 transition-all"
        >
          <span>GITHUB</span>
          <RxExternalLink />
        </a>
        <Dialog>
          <DialogTrigger>
            <p className="font-mono cursor-pointer hover:opacity-30">ABOUT</p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-mono">SUPERSTOCKS</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground">
              <span className="text-white font-mono">SuperStocks</span> is a modern stock market analysis and visualization application built with Next.js, React, and Tailwind CSS.
            </p>
            <p className="text-muted-foreground">
              The application provides real-time stock data visualization, interactive charts, and analytics to help users make informed investment decisions.
            </p>
            <p className="text-muted-foreground">
              Built with modern web technologies and designed with a focus on user experience and performance.
            </p>
            <p className="text-muted-foreground">
              Visit the{" "}
              <a
                href="https://github.com/nicholasdev0722/super-stocks"
                className="text-white underline"
              >
                Github repo
              </a>{" "}
              to learn more.
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
