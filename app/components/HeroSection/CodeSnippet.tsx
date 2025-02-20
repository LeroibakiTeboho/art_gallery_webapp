import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const CodeSnippet = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-gray-700">
                <code>
                    <span className="text-gray-400">
                    {`// Create a new developer instance\n`}
                    </span>
                    
                    {`const teboho = new Developer();\n\n`}

                    {`// Add skills to the developer\n`}
                    {`teboho.skills = ["React", "Node.js", "MongoDB", \n"Express", "JavaScript"];\n\n`}

                    {`// Set developer experience\n`}
                    {`teboho.experience = "3+ years";\n\n`}

                    {`// Define a fun fact\n`}
                    {`teboho.funFact = "Loves turning coffee into code \n☕";\n\n`}

                    {`// Add the developer to the team\n`}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <Typewriter
                            options={{
                                strings: ['team.add(teboho);'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </motion.div>
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippet;
