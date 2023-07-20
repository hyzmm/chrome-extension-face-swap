import "./App.css";
import exchange from "./assets/exchange.svg";

function App() {
  return (
    <div className={"flex h-full flex-col"}>
      <div className={"flex w-full grow items-center"}>
        <div className="flex h-full flex-1 items-center justify-center border-2 border-blue-500 object-contain">
          <img
            draggable={false}
            src="https://img1.baidu.com/it/u=1719075340,4185340421&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
            alt=""
          />
        </div>
        <img src={exchange} className={"white m-2 h-6 w-6"} />
        <div
          className={
            "flex h-full flex-1 items-center justify-center border-2 border-dashed border-blue-500 object-contain"
          }
        >
          <img
            draggable={false}
            src="https://img1.baidu.com/it/u=826797811,3494357996&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=535"
            alt=""
          />
        </div>
      </div>
      <button className={"mt-4 h-8 rounded-md bg-blue-700"}>Execute</button>
    </div>
  );
}

export default App;
