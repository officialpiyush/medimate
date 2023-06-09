import {
  IconArrowBadgeRight,
  IconHeartbeat,
  IconPencilPlus,
  IconPlus,
  IconRefresh,
} from "@tabler/icons-react";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";

import { DayPicker } from "react-day-picker";
import HomepageSidebar from "~/components/HompageSidebar";
import { realm } from "~/lib/mongo/init";

const appointments = [
  {
    date: new Date(),
    doctor: "Dr. John Doe",
    hospital: "Apollo Hospital",
  },
  {
    date: new Date(),
    doctor: "Dr. John Doe",
    hospital: "Apollo Hospital",
  },
];

export default function DashboardPage() {
  // verify auth status
  useEffect(() => {
    if (!realm.currentUser) {
      void router.push("/");
    }
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="grid h-full w-full grid-cols-12 gap-6">
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex flex-col gap-6 px-8 py-4">
            {/* title */}
            <div className="text-2xl font-medium text-white">Dashboard</div>

            <Link href="/health-status" className="group">
              <div className=" flex w-full items-center justify-center gap-4 rounded-xl border-4 border-[#57C5B6] bg-[#0A4D68] py-6 transition-all duration-500 group-hover:bg-[#0A4D68]/30 group-hover:backdrop-blur-md">
                <IconHeartbeat className="h-16 w-16 text-[#00FFCA] group-hover:animate-pulse " />
                <span className="text-2xl font-light text-[#00FFCA]">
                  Get your health status
                </span>
              </div>
            </Link>

            <div className="flex w-full items-center justify-center">
              <DayPicker
                className="rounded-md border bg-[#c1f5a7] px-4 py-2"
                mode="single"
                numberOfMonths={2}
              />

              <div className="flex flex-col gap-6 px-6">
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconPlus className="h-8 w-8" color="#57C5B6" />
                </div>
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconRefresh className="h-8 w-8" color="#57C5B6" />
                </div>
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconPencilPlus className="h-8 w-8" color="#57C5B6" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xl text-white">Upcoming appointments</span>
              <div className="flex flex-col gap-4 rounded-xl bg-[#088395] px-4 py-4">
                {appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-between text-lg text-[#C1F5A7]"
                  >
                    {appointment.doctor}
                    <IconArrowBadgeRight color="#C1F5A7" />
                    {appointment.date.toDateString()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right bar */}
        <div className="col-span-4 rounded-xl bg-[#088395]">
          <HomepageSidebar />
        </div>
      </div>
    </div>
  );
}
