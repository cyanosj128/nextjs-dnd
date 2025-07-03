import Board from "@/components/Board";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="p-[16px]">Control Area</div>
      <div className="flex gap-[8px]">
        <div className="flex-1 bg-gray-100 p-[16px] h-[100vh]">
          <Panel />
        </div>
        <div className="flex-5 bg-white p-[16px] h-[100vh]">
          <Board />
        </div>
      </div>
    </div>
  );
}
