import Image from "next/image";
import logo from "@/assets/images/logo.svg"; // You'll need to add your logo image

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center p-2">
                    <div>
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="flex flex-col md:flex-row  items-center justify-center gap-4 p-6 pb-10">
                        {footerLinks.map((footer) => (
                            <a
                                className="text-white/50"
                                key={footer.label}
                                href={footer.href}
                            >
                                {footer.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
