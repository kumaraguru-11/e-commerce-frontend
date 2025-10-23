import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-muted-foreground px-6 py-10" dir="">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-right">
        {/* Contact */}
        <section>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p className="text-sm hover:underline cursor-pointer">
            +966501236118
          </p>
        </section>

        {/* Important Links */}
        <section>
          <h2 className="font-bold text-lg mb-4">Important Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">
              Terms of Use and Privacy Policy
            </li>
            <li className="hover:underline cursor-pointer">
              Exchange and Return Policy
            </li>
          </ul>
        </section>

        {/* Store Info */}
        <section>
          <h2 className="font-bold text-lg mb-4">Dandelion Store</h2>
          <p className="text-sm leading-relaxed">
            An ideal online store to experience and showcase the unique
            capabilities and features of our products.
          </p>
        </section>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-muted pt-4 text-center text-xs text-muted-foreground/80">
        © {new Date().getFullYear()} Dandelion Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
