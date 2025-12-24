import AwardIcon from "./icons/Award";
import star from "../assets/gold-star.jpg";
import Calendar from "./icons/Calendar";
import Paper from "./ui/Paper";
import Button from "./ui/Button";
import Strike from "./icons/Strike";
import {
  Copy,
  Facebook,
  Gift,
  Linkedin,
  Share2,
  Star,
  Twitter,
  UserRoundPen,
  Users,
} from "lucide-react";
import ScoreCount from "./ScoreCount";
import { useUserProfile } from "../hooks/useUserProfile";

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const jsDayIndex = new Date().getDay();

const todayIndex = jsDayIndex === 0 ? 6 : jsDayIndex - 1;
const today = new Date().toISOString().split("T")[0];

const EarnPoints = () => {
  const { profile, handleClaimToday: onClaimToday } = useUserProfile();

  const currentPoints = profile?.count ?? 0;
  const targetPoints = 5000;

  const progressPercent = Math.min((currentPoints / targetPoints) * 100, 100);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Paper>
          <div>
            <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                <AwardIcon />
                Points Balance
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
                  {currentPoints}
                </div>

                <img src={star} alt="star" className="h-10 w-10" />
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1 text-gray-600">
                  <div>
                    Progress to{" "}
                    <span className="font-medium">$5 Gift Card</span>
                  </div>
                  <span className="font-medium">
                    {currentPoints}/{targetPoints}
                  </span>
                </div>
                <div className="h-2 bg-[#e5e7eb] rounded-[9999px] overflow-hidden">
                  <div
                    style={{ width: `${progressPercent}%` }}
                    className="h-full bg-linear-to-br from-[#9013fe] to-[#FF9FF5] rounded-full transition-[width] duration-500 ease-in-out"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  🚀 Just getting started — keep earning points!
                </p>
              </div>
            </div>
          </div>
        </Paper>
        <Paper>
          <div>
            <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                <Calendar />
                Daily Streak
              </h3>
            </div>
            <div className="p-4">
              <div className="mt-1 font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
                {profile?.days_count ?? 0} day
              </div>

              <div className="flex mt-4 space-x-2 justify-center">
                {weekDays?.map((item, index) => {
                  const isToday = index === todayIndex;

                  return (
                    <div
                      key={`${item}-${index}`}
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${
                        isToday ? "ring-2 ring-[#9013fe] ring-offset-2" : ""
                      }
                      `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>

              <p className="text-[0.875rem] text-gray-600 text-center mt-3">
                Check in daily to to earn +5 points
              </p>

              <Button
                onClick={onClaimToday}
                disabled={profile?.date === today}
                className={`mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200  ${
                  profile?.date === today
                    ? "bg-gray-300 text-gray-800 cursor-not-allowed"
                    : ""
                }`}
              >
                <Strike /> Claimed Today
              </Button>
            </div>
          </div>
        </Paper>
        <Paper>
          <div>
            <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
              <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-[1.25rem] font-bold relative z-2">
                  Top Tool Spotlight
                </h3>
                <div className="overflow-hidden relative rounded-full size-10 md:size-16">
                  <img
                    src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png"
                    alt="shapes icons"
                  />
                </div>
              </div>

              <p className="text-lg">
                <strong>Reclaim</strong>
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-start mb-4">
                <div className="w-6 h-6 animate-pulse bg-[#eef2ff] rounded-md flex items-center justify-center mr-4 shrink-0 text-[#9013fe]">
                  <Calendar />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-black">
                    Automate and Optimize Your Schedule
                  </h4>
                  <p className="text-[0.875rem] text-gray-600">
                    Reclaim.ai is an AI-powered calendar assistant that
                    automatically schedules your tasks, meetings, and breaks to
                    boost productivity. Free to try — earn Flowva Points when
                    you sign up!
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3 px-4 py-1.25 flex justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
              <Button className="bg-[#9013fe] max-w-fit hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0 text-sm max-h-10">
                <UserRoundPen />
                Sign up
              </Button>
              <Button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] max-w-fit text-white  py-2 px-4 rounded-full font-semibold text-sm max-h-10">
                <Gift />
                Claim 50 pts
              </Button>
            </div>
          </div>
        </Paper>
      </div>

      <div className="mt-5">
        <h2 className="text-lg md:text-2xl text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
          Earn More Points
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Paper highlight>
            <div>
              <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                  <Star />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Refer and win 10,000 points!
                </h3>
              </div>
              <div className="p-4">
                <p className="font-medium text-sm text-gray-800">
                  Invite 3 friends by Nov 20 and earn a chance to be one of 5
                  winners of
                  <span className="text-[#9013fe]">10,000 points</span> .
                  Friends must complete onboarding to qualify.
                </p>
              </div>
            </div>
          </Paper>
          <Paper highlight>
            <div>
              <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                  <Share2 />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 text-md">
                    Share Your Stack
                  </h3>
                  <p className="text-gray-400 font-medium text-sm">
                    Earn +25 pts
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">
                  Share your tool stack
                </p>

                <Button className="text-[#9013fe]! max-w-fit max-h-10 bg-[#eef2ff] hover:text-white! hover:bg-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0">
                  <Share2 />
                  Share
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-lg md:text-2xl text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
          Refer & Earn
        </h2>

        <div className="mt-5">
          <Paper>
            <div className="p-4 relative bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
              <div className="flex items-center gap-4">
                <Users className="text-[#9301fe]" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Share Your Link
                  </h3>
                  <p className="text-gray-500 font-medium text-md">
                    Invite friends and earn 25 points when they join!
                  </p>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>

      <div className="my-10 flex justify-between items-center">
        <ScoreCount count={0} name="Referrals" />
        <ScoreCount count={0} name="Points Earned" />
      </div>

      <div className="mx-4 mt-3">
        <Paper>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm mb-2 text-gray-700">
              Your personal referral link:
            </p>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={`https://app.flowvahub.com/signup/?ref=${profile?.username}`}
                className="flex-1 text-gray-800 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10"
              />

              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-[#9301fe]">
                <Copy />
              </button>
            </div>
          </div>
        </Paper>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button className="w-7.5 h-7.5 p-1 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] transition-transform duration-200 hover:translate-y-0.75">
          <Facebook />
        </button>

        <button className="w-7.5 h-7.5 p-1 bg-black rounded-full flex items-center justify-center text-white text-[8px] transition-transform duration-200 hover:translate-y-0.75">
          <Twitter />
        </button>

        <button className="w-7.5 h-7.5 p-1 bg-blue-700 rounded-full flex items-center justify-center text-white text-[8px] transition-transform duration-200 hover:translate-y-0.75">
          <Linkedin />
        </button>
      </div>
    </div>
  );
};

export default EarnPoints;
