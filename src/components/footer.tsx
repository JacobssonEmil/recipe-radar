import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted text-foreground">
      <div className="container mx-auto px-4 py-10 max-w-[1300px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold ">About Us</h3>
            <p className="text-sm text-muted-foreground mr-8">
              We are a company dedicated to providing high-quality products and
              excellent customer service.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>123 Main St, Anytown, USA 12345</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex"
                >
                  <FaFacebook size={20} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex"
                >
                  <FaInstagram size={20} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tex
                  t-muted-foreground hover:text-foreground flex"
                >
                  <FaXTwitter size={20} className="mr-2" />X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Recept. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
