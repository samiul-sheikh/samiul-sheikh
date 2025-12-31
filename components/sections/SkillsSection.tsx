import Image from "next/image";

const skills = [
    {
        name: "Next JS",
        percentage: "89%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNLjMrvmiGsyRKTyDHKYQw-vu46vzrQqKAesnIL-DmMufCy_aCC9YdutlXtyF0FH_P7fzI9SAGIk5_M5QmZhA2eX_v4mG9jUGuHMpKsGdk9ujIugBkwQdwwY6WzzRyMD4wwCHaRM4P7TJ0GOiKqN3zXoKT8tYXq3pkprKdapW61R8psVxZf15YywTAWv96Oiab_5s97r5jVlZ9TE8qlk1KgzBZtVuH8T_9yRvz9oWkaDyoBCDaEP1lPkgNmZinqSrgLC8_gi0cP4",
    },
    {
        name: "React",
        percentage: "89%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNLjMrvmiGsyRKTyDHKYQw-vu46vzrQqKAesnIL-DmMufCy_aCC9YdutlXtyF0FH_P7fzI9SAGIk5_M5QmZhA2eX_v4mG9jUGuHMpKsGdk9ujIugBkwQdwwY6WzzRyMD4wwCHaRM4P7TJ0GOiKqN3zXoKT8tYXq3pkprKdapW61R8psVxZf15YywTAWv96Oiab_5s97r5jVlZ9TE8qlk1KgzBZtVuH8T_9yRvz9oWkaDyoBCDaEP1lPkgNmZinqSrgLC8_gi0cP4",
    },
    {
        name: "TypeScript",
        percentage: "93%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1gbtMVv8LgxtinHjGuhe1Qd5TsESHJFsG7U-zRDdxVAnwjr7haIG_oUxZCNDJXksSGUOgKc5ARM1isVJHkG7NPsYnHLGbPUCJXAvsv9RPG02sVOWUN5aBGlfKStgl9vJjwxWXZQz28NGKHrPz_GlMDzfWlzbwjNfL1SDa_yvCGXwrFATAfpIlOYKVyOsCpDiTWwqDD_d_uhWJejrzx0KMS4qjaRnmliaqjYnBDnCfhqkUsy9iPwds-il3M2RCqKQ0nlNOJcl3x4E",
    },
    {
        name: "JavaScript",
        percentage: "93%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1gbtMVv8LgxtinHjGuhe1Qd5TsESHJFsG7U-zRDdxVAnwjr7haIG_oUxZCNDJXksSGUOgKc5ARM1isVJHkG7NPsYnHLGbPUCJXAvsv9RPG02sVOWUN5aBGlfKStgl9vJjwxWXZQz28NGKHrPz_GlMDzfWlzbwjNfL1SDa_yvCGXwrFATAfpIlOYKVyOsCpDiTWwqDD_d_uhWJejrzx0KMS4qjaRnmliaqjYnBDnCfhqkUsy9iPwds-il3M2RCqKQ0nlNOJcl3x4E",
    },
    {
        name: "Node JS",
        percentage: "92%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmglF7FT6sdC55H2vMdTz3yjGrz4xWVNo767tLnepDb_SB4EQmPXF_71saNFCX3_rtgHK5R2T6AMjd5-Yk7EASCkMHa64G82x83kz2HdweWFUVGnQROxne_tryxtJjRh2lbQDO12IUYjUNDrwYeFGC4jW16Zme3WcphmJHguPdX2rAqGXvQFGU-yz7hKlkFBwebg_BMUNZmQK57DqAKowktj8-MGfNmm9W-zUrp0xKjsY4DdkBhKTBmvAIN5lkWsgThRDJiePFcYM",
    },
    {
        name: "WordPress",
        percentage: "99%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF3ajf0i1KtJs1d3lA3-DaMhqbqnQjVCUnmb6ygSY0QjtlEbemyjWTn_juJNpdXkZ7vs3hLjpdkdo_qzwQGlElORGpFC15l0tOedXc671M0QUdsmrBU6X81W3gD0mjBbb-yQKfP-2jDiQPi8QrH65NZ7RN-6GCC-TidE5EEBOMS40_ObuoTR8YeJ6xS5BAMEekxcNXK8RxxJvkeB5CRZZyJGBX14hAIhGMIz85B_n2RGz-htP95BNthLfH321aw1bBRszxvMGzGP0",
    },
    {
        name: "Tailwind CSS",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
    {
        name: "ShadCN",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
    {
        name: "Chakra UI",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
    {
        name: "Prisma",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
    {
        name: "Docker",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
    {
        name: "Github",
        percentage: "80%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnoxJLENf9aH_bk7ja558KzMi2hAutQaCEgc_budTMfuVsSEyZDxg7xLX5sknsbgOUosO8capaOfMRsr-VuQ8AayjDUlKUi5URNPEdWTF-w4F-hP5uZPoxdBN8TYL0vvptVNNGhpamLost-a7amlr9jmqClLF-raBsZOEUZx9pXdK3GrYDVcwQCkzlnfZdaWvkj1QoQ3kZI8V9P2i6oNZyyq91GHiq-kwBA-l0M_IqGzLvYqGiFLlH-shrf7y55sDFmlC6yoeXew",
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My</span>{" "}
                        <span className="text-white">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-transparent hover:border-primary hover:bg-secondary transition-all cursor-pointer h-40"
                        >
                            <div className="relative w-12 h-12 mb-4">

                            </div>
                            <span className="text-primary font-semibold text-sm">
                                {skill.name}
                            </span>
                        </div>
                        // <div
                        //     key={index}
                        //     className="group flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-transparent hover:border-primary hover:bg-secondary transition-all cursor-pointer h-40"
                        // >
                        //     <div className="relative w-12 h-12 mb-4">
                        //         <Image
                        //             src={skill.image}
                        //             alt={skill.name}
                        //             fill
                        //             className="object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                        //         />
                        //     </div>
                        //     {/* <span className="text-gray-400 text-sm mb-2 group-hover:text-primary transition-colors">
                        //         {skill.percentage}
                        //     </span> */}
                        //     <span className="text-primary font-semibold text-sm">
                        //         {skill.name}
                        //     </span>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
