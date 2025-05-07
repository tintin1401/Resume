import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export function Experience() {
    const events = [
        { date: "March 2024 – Present", title: "Self-Assessment Assistant", description: "As a Self-Assessment Assistant, I support the evaluation process of the ITM program and contribute to modifying the graduate profile to align with academic and industry standards. My responsibilities involve gathering non-confidential evidence, assisting in the completion of templates, and collaborating on the design and presentation of essential documentation.Additionally, I play a key role in organizing and managing data using Excel, creating detailed reports, charts, and visual representations to facilitate analysis and decision-making. I also assist in various administrative and coordination tasks, ensuring that the self-assessment and profile modification processes run efficiently." },
        { date: "August 2023 – November 2023", title: "Programming Course Assistant", description: "During my role as a Programming Course Assistant, I was responsible for reviewing and evaluating student code and project documentation. My primary objective was to provide constructive feedback to help students enhance the quality, efficiency, and readability of their code. I ensured that best practices were followed, guiding students in implementing structured and optimized programming solutions.Furthermore, I assisted professors by generating comprehensive performance reports, which helped them make data-driven decisions regarding student progress and curriculum effectiveness. My role also included analyzing large datasets in Excel, creating graphical reports to visualize trends and insights, and supporting students in improving their technical problem-solving skills." },
      ];
    return (
        <div className="grid px-4 lg:px-24">
        <h3 className="text-3xl font-bold text-[#2F6BA9] dark:text-[#2D9FE5] mb-6 text-center mt-4 md:text-left md:mt-0">
          Professional Experience
        </h3>
        <Timeline className="grid grid-cols-[auto]  mx-4 md:mx-0 border-dashed!">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelinePoint  />
            <TimelineContent >
              <TimelineTime>{event.date}</TimelineTime>
              <TimelineTitle className="text-[#2F6BA9]! dark:text-[#2D9FE5]!">{event.title}</TimelineTitle>
              <TimelineBody className="dark:text-gray-300!">
              {event.description}
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
                  ))}
        </Timeline>        
      </div>
    );
  }  
