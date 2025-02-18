import Tag from "@/components/Tag";
import figmalogo from "@/assets/images/figma-logo.svg";
import notionlogo from "@/assets/images/notion-logo.svg";
import slacklogo from "@/assets/images/slack-logo.svg";
import relumelogo from "@/assets/images/relume-logo.svg";
import githublogo from "@/assets/images/github-logo.svg";
import framerlogo from "@/assets/images/framer-logo.svg";
import IntegrationColumn from "@/components/Integrations";
export type IntegrationsType = typeof integrations;

const integrations = [
    {
        name: "Figma",
        icon: figmalogo,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionlogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slacklogo,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumelogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerlogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githublogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export default function Integrations() {
    return (
        <section id="integrations" className="py-24 overflow-hidden ">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center lg:gap-16 gap-3">
                    <div className="">
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers semalessly connects with your favorite tools,
                            making it easy to plug into your workflow and
                            collaborate across different platforms.{" "}
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 lg:mt-2 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn
                                integrations={integrations}
                                reverse
                            />
                            <IntegrationColumn
                                className="hidden md:block lg:mt-4"
                                integrations={integrations.slice().reverse()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
