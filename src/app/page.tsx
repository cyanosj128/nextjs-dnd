import Board from "@/components/Board";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="p-[16px]">Control Area</div>
      <div className="flex gap-[8px] h-full">
        <div className="flex-1 bg-gray-100 p-[16px] h-full">
          <Panel />
        </div>
        <div className="flex-5 bg-white h-full">
          <Board />
        </div>
      </div>
    </div>
  );
}
