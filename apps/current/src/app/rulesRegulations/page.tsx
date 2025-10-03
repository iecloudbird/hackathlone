/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BackToTopButton from "../general/back-to-top";

export default function Rules() {
  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />

        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <ShootingStars />

          {/* Header */}
          <div className="mx-auto my-10 flex flex-col items-center justify-center gap-3 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-10 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-4 text-center font-nokaTrial text-5xl font-bold text-transparent"
            >
              Rules & Regulations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="font-hackathoneCabinetGrotesk text-gray-300"
            >
              Essential guidelines for all HackAthlone 2025 participants
            </motion.p>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-5xl space-y-8 pb-20">
            {/* Team Formation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                1. Team Formation
              </h2>
              <ul className="space-y-2 font-hackathoneCabinetGrotesk text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    <strong>Global Challenge:</strong> Teams may have 1–6
                    members.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    <strong>Local Challenge:</strong> Participation is
                    individual only.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Workspace & Cleanliness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                2. Workspace & Cleanliness
              </h2>
              <p className="mb-4 font-hackathoneCabinetGrotesk text-gray-300">
                Each team will be assigned a workspace consisting of a table
                with 6 chairs for working, eating, or resting.
              </p>
              <ul className="space-y-2 font-hackathoneCabinetGrotesk text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    Be mindful of nearby teams—avoid noise and ensure a
                    respectful environment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>Keep your workspace clean at all times:</span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>
                    Fold pizza boxes/food containers and put them in garbage
                    bins.
                  </span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>Do not litter in or around the workspace.</span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>
                    Drain the liquids in liquid bins/wash basins only.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Campus Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                3. Campus Access
              </h2>
              <p className="font-hackathoneCabinetGrotesk text-gray-300">
                Participants must stay within the Engineering Building, unless
                advised otherwise, in that case they need to be accompanied by
                volunteers.
              </p>
            </motion.div>

            {/* Food & Meals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                4. Food & Meals
              </h2>

              <div className="space-y-4 font-hackathoneCabinetGrotesk text-gray-300">
                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Dinner (Friday – Pizza Night):
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        1 large pizza for every 4 participants (you can come up
                        to two times to redeem the vouchers).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Pizza supply by dietary preference is limited; alert us
                        if you have food allergies.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Treat dinner as networking—connect with other
                        participants!
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Breakfast (Self-Serve):
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Open spread. Take only what you need so all participants
                        get a fair share.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">Lunch:</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Controlled portion sizes with dietary needs considered.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Return plates, cutlery, and any material used after
                        meals (especially on Sunday).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Lab & HackShop Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                5. Lab & HackShop Access
              </h2>

              <div className="space-y-4 font-hackathoneCabinetGrotesk text-gray-300">
                <div>
                  <h3 className="mb-2 font-semibold text-white">Labs:</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        To use a lab (3D printing, Sound engineering, Games and
                        Mechanical) report to the Support Desk, state your
                        requirements, and you'll be escorted to the appropriate
                        lab.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">HackShop:</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Go to the Support Desk for component requests (component
                        list will be published around midnight).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>Distribution is first-come, first-serve.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Return all borrowed components by the end of the
                        hackathon.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Bring your own tools/components if needed, as not
                        everything may be stocked.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Mentor Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                6. Mentor Sessions
              </h2>
              <ul className="space-y-2 font-hackathoneCabinetGrotesk text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    Visit the Support Desk to book a session after reviewing the
                    mentor list online.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    Sessions are strictly 10 minutes each to ensure fairness.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    Mentorship is for guidance, not for directly solving
                    problems that you encounter in your projects.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    <strong>Mentor availability:</strong>
                  </span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>Saturday – all mentors available.</span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>
                    Sunday – limited mentors available (check the website).
                  </span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>
                    Online mentors also available; book via Support Desk.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>Booking is first-come, first-serve. Plan ahead.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    <strong>Additional chance:</strong> Connect during
                    breakfasts and breaks for informal networking.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Submissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                7. Submissions
              </h2>

              <div className="space-y-4 font-hackathoneCabinetGrotesk text-gray-300">
                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    General Rules:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Only teams who have submitted before the deadline are
                        eligible to present.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Submission order determines presentation order—earlier
                        submissions present earlier.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Local Challenge:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>Create a GitHub repo containing:</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>Your name</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>Challenge name</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>
                        Github Markdown should illustrate the challenge
                        description (refer to the framework) or consult Shannon
                        Studio (Room: W205) for clarifying your doubts
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        (Optional but recommended): Add a 30-second demo video
                        to the same GitHub repo.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Email submission repo link + video (if any) to
                        spaceappsathlone@gmail.com.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span className="font-semibold text-white">
                        Deadline: Before 9AM on Sunday
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Global Challenge:
                  </h3>
                  <p className="mb-2">
                    There are 2 deadlines, first for practice presentation that
                    is optional and the 2nd is the main deadline for the final
                    presentation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        (Optional) Submit your presentation drafts by 9AM on
                        Sunday, to get a chance to do a practice presentation
                        between 10AM to 12noon. This gives an opportunity to
                        time yourself and get feedback on your presentations as
                        well. This will be a first come first serve thing, so
                        the practice presentation order will also be fixed based
                        on your submission.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span className="font-semibold text-white">
                        Submit project presentations by Sunday, 12:30 PM to
                        spaceappsathlone@gmail.com
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>Additionally:</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>Host your project on a GitHub repo</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>
                        Submit repo link via email and on Space Apps official
                        platform (spaceappschallenge.org)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span className="font-semibold text-red-400">
                        Global platform deadline: Missing this deadline
                        disqualifies the team from consideration and NASA
                        certificates.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Presentations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 font-nokaTrial text-2xl font-bold text-white">
                8. Presentations
              </h2>
              <ul className="space-y-2 font-hackathoneCabinetGrotesk text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>Each team will get a 5-minute slot total:</span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>
                    3 minutes for presentation (hard stop at 3 minutes).
                  </span>
                </li>
                <li className="ml-8 flex gap-3">
                  <span className="text-brightYellow">◦</span>
                  <span>2 minutes for Q&A with judges.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    Presentation slots are scheduled based on submission order
                    (earlier submitters present first).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span>
                    You must have submitted your project by 12:30 PM Sunday to
                    be eligible to present.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brightYellow">•</span>
                  <span className="font-semibold text-white">
                    Judges will move on once the time ends—stick to your slot!
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Disclaimer & Event Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-gray-700 bg-black/40 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-6 font-nokaTrial text-2xl font-bold text-white">
                Disclaimer & Event Guidelines
              </h2>

              <div className="space-y-6 font-hackathoneCabinetGrotesk text-gray-300">
                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Media & Photography:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Not a fan of being in photos? No worries! Just grab a
                        black lanyard (No Photos ❌) at registration. Our team
                        will make sure not to capture you in official media.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Please note: while we'll do our best, we cannot control
                        or take responsibility if other participants capture
                        photos/videos.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">Showers:</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Showers will be available at specific time slots only.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        You must come to the support desk and book your slots.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        A volunteer will escort you to the shower area, random
                        use isn't possible.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Quiet/No Noise Room:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Need a nap? We've got a Silence & No-Noise Room just for
                        that.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>Access is first come, first served.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Please vacate the space once you're done so others can
                        also rest peacefully.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    T-Shirts & Goodies:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        T-shirt sizes will only be guaranteed if you completed
                        on-time registration.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        If your preferred size isn't available, don't worry
                        you'll still get:
                      </span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>A TUS badge</span>
                    </li>
                    <li className="ml-8 flex gap-3">
                      <span className="text-brightYellow">◦</span>
                      <span>A Keychain</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Everyone will also receive a swag bag + a sticker pack.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Food & Vouchers:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Pizzas will be served in 4 slots during the hackathon.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>Each participant gets 2 vouchers per slot.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        If you have dietary needs or allergies, please inform us
                        in advance so we can accommodate you.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    Mentor Access:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        Mentors will be available during specific time slots.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        To meet them, you must book your slot at the support in
                        advance.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brightYellow">•</span>
                      <span>
                        No random drop-ins let's keep it fair and organized for
                        everyone.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <BackToTopButton />
      </div>
      <Footer />
    </section>
  );
}
