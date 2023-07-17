import "./App.css";
import exchange from "./assets/exchange.svg";
function App() {
  return (
    <div className={"flex h-full flex-col"}>
      <div className={"flex w-full grow  items-center"}>
        <img
          draggable={false}
          src="https://img1.baidu.com/it/u=1719075340,4185340421&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
          alt=""
          className={"card h-full basis-1/2 object-contain"}
        />
        <img src={exchange} className={"white m-2 h-8 w-8"} />
        <img
          draggable={false}
          src="https://img1.baidu.com/it/u=826797811,3494357996&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=535"
          alt=""
          className={"card  basis-1/2 object-contain"}
        />
      </div>
      <button className={"rounded-pill"}>Execute</button>
    </div>
  );
}

export default App;
