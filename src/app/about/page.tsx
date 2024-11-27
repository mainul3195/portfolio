export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Hello! I'm Mainul Hasan, a Computer Science student with a passion for web development
              and software engineering. I enjoy creating elegant solutions to complex problems and
              am constantly learning new technologies to expand my skill set.
            </p>
            <p className="text-gray-600">
              My journey in technology began with a curiosity about how things work, which led me
              to pursue Computer Science. Today, I focus on web development, particularly using
              modern technologies like React, Next.js, and Node.js.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University Name • 2020 - Present</p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Relevant coursework in Data Structures, Algorithms, and Software Engineering</li>
              <li>Active member of the Computer Science Club</li>
              <li>Participated in various hackathons and coding competitions</li>
            </ul>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interests & Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Interests</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Web Development</li>
                <li>• Software Architecture</li>
                <li>• Cloud Computing</li>
                <li>• Machine Learning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Activities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Open Source Contributing</li>
                <li>• Technical Blogging</li>
                <li>• Hackathons</li>
                <li>• Coding Competitions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
