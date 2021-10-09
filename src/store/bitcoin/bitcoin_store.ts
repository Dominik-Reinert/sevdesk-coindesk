import { AbstractStore } from "../abstract_store";
import { ServerData } from "../server_data";
import { Bitcoin, Chart } from "./server_interfaces";

interface Details {
  marketCap: string;
  totalBc: number;
  dayTransactionCount: number;
  dayBtcSent: number;
  hashRate: number;
  getDifficulty: number;
}

interface ExchangeRate {
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

interface ChartData {
  name: string;
  description: string;
  unit: string;
  values: {
    x: number;
    y: number;
  }[];
}

interface BitcoinData {
  details: ServerData<Bitcoin.DetailsRoot>;
  exchangeRates: ServerData<Bitcoin.ExchangeRatesRoot>;
  chart: ServerData<Chart.RootObject>;
}

export interface AdaptedBitcoinData {
  details: Details;
  exchangeRates: ExchangeRate[];
  chart: ChartData;
}

class BitcoinStore extends AbstractStore<BitcoinData, AdaptedBitcoinData> {
  protected adaptData(data: BitcoinData): AdaptedBitcoinData {
    return {
      exchangeRates: this.adaptExchangeRates(data),
      details: this.adaptDetails(data),
      chart: this.adaptChartData(data),
    };
  }

  private adaptExchangeRates(data: BitcoinData): ExchangeRate[] {
    return Object.keys(data.exchangeRates.get())?.reduce(
      (acc: ExchangeRate[], key: string) => {
        acc.push(
          data.exchangeRates.get()[
            key as keyof Bitcoin.ExchangeRatesRoot
          ] as ExchangeRate
        );
        return acc;
      },
      []
    );
  }

  private adaptDetails(data: BitcoinData): Details {
    const details = data.details.get();
    return {
      dayBtcSent: details.estimated_btc_sent,
      dayTransactionCount: details.estimated_transaction_volume_usd,
      getDifficulty: details.difficulty,
      hashRate: details.hash_rate,
      marketCap: "?",
      totalBc: details.totalbc,
    };
  }

  private adaptChartData(data: BitcoinData): ChartData {
    const chart = data.chart.get();
    return { ...chart };
  }
}

export const bitcoinStore = new BitcoinStore({
  details: createDetailsServerData(),
  exchangeRates: createExchangeRatesServerData(),
  chart: createChartServerData(),
});

function createDetailsServerData(): ServerData<Bitcoin.DetailsRoot> {
  return new ServerData<Bitcoin.DetailsRoot>({
    fetch: () =>
      fetch("https://api.blockchain.info/stats").then((result) =>
        result.json()
      ) as Promise<Bitcoin.DetailsRoot>,
  });
}

function createExchangeRatesServerData(): ServerData<Bitcoin.ExchangeRatesRoot> {
  return new ServerData<Bitcoin.ExchangeRatesRoot>({
    fetch: () =>
      fetch("https://blockchain.info/ticker").then((result) =>
        result.json()
      ) as Promise<Bitcoin.ExchangeRatesRoot>,
  });
}

function createChartServerData(): ServerData<Chart.RootObject> {
  return new ServerData<Chart.RootObject>({
    fetch: async () => ({
      name: "name",
      description: "description",
      unit: "unit",
      period: "period",
      status: "status",
      values: [{"x":1602201600,"y":10923.3},{"x":1602288000,"y":11063.19},{"x":1602374400,"y":11302.67},{"x":1602460800,"y":11376.61},{"x":1602547200,"y":11540.04},{"x":1602633600,"y":11428.24},{"x":1602720000,"y":11431.32},{"x":1602806400,"y":11503.73},{"x":1602892800,"y":11327.57},{"x":1602979200,"y":11366.51},{"x":1603065600,"y":11508.2},{"x":1603152000,"y":11758.16},{"x":1603238400,"y":11925.46},{"x":1603324800,"y":12831.56},{"x":1603411200,"y":12990.25},{"x":1603497600,"y":12944.52},{"x":1603584000,"y":13128.46},{"x":1603670400,"y":13036.77},{"x":1603756800,"y":13076.37},{"x":1603843200,"y":13651.47},{"x":1603929600,"y":13289.0},{"x":1604016000,"y":13458.66},{"x":1604102400,"y":13564.72},{"x":1604188800,"y":13810.32},{"x":1604275200,"y":13758.88},{"x":1604361600,"y":13575.17},{"x":1604448000,"y":14023.31},{"x":1604534400,"y":14155.59},{"x":1604620800,"y":15591.39},{"x":1604707200,"y":15595.77},{"x":1604793600,"y":14839.84},{"x":1604880000,"y":15490.6},{"x":1604966400,"y":15328.53},{"x":1605052800,"y":15317.04},{"x":1605139200,"y":15708.65},{"x":1605225600,"y":16295.57},{"x":1605312000,"y":16339.33},{"x":1605398400,"y":16091.07},{"x":1605484800,"y":15968.16},{"x":1605571200,"y":16725.15},{"x":1605657600,"y":17679.72},{"x":1605744000,"y":17798.45},{"x":1605830400,"y":17820.57},{"x":1605916800,"y":18687.45},{"x":1606003200,"y":18699.75},{"x":1606089600,"y":18422.28},{"x":1606176000,"y":18398.91},{"x":1606262400,"y":19172.52},{"x":1606348800,"y":18739.8},{"x":1606435200,"y":17151.44},{"x":1606521600,"y":17138.87},{"x":1606608000,"y":17732.42},{"x":1606694400,"y":18191.6},{"x":1606780800,"y":19709.73},{"x":1606867200,"y":18792.52},{"x":1606953600,"y":19226.97},{"x":1607040000,"y":19454.54},{"x":1607126400,"y":18670.49},{"x":1607212800,"y":19155.06},{"x":1607299200,"y":19377.66},{"x":1607385600,"y":19181.41},{"x":1607472000,"y":18318.87},{"x":1607558400,"y":18554.15},{"x":1607644800,"y":18247.76},{"x":1607731200,"y":18029.36},{"x":1607817600,"y":18803.44},{"x":1607904000,"y":19164.48},{"x":1607990400,"y":19276.59},{"x":1608076800,"y":19439.75},{"x":1608163200,"y":21379.48},{"x":1608249600,"y":22847.46},{"x":1608336000,"y":23150.79},{"x":1608422400,"y":23869.92},{"x":1608508800,"y":23490.58},{"x":1608595200,"y":22745.48},{"x":1608681600,"y":23824.99},{"x":1608768000,"y":23253.37},{"x":1608854400,"y":23715.53},{"x":1608940800,"y":24693.58},{"x":1609027200,"y":26443.21},{"x":1609113600,"y":26246.58},{"x":1609200000,"y":27036.69},{"x":1609286400,"y":27376.37},{"x":1609372800,"y":28856.59},{"x":1609459200,"y":28982.56},{"x":1609545600,"y":29393.75},{"x":1609632000,"y":32195.46},{"x":1609718400,"y":33000.78},{"x":1609804800,"y":32035.03},{"x":1609891200,"y":34046.67},{"x":1609977600,"y":36860.41},{"x":1610064000,"y":39486.04},{"x":1610150400,"y":40670.25},{"x":1610236800,"y":40240.72},{"x":1610323200,"y":38240.09},{"x":1610409600,"y":35544.94},{"x":1610496000,"y":34011.82},{"x":1610582400,"y":37393.13},{"x":1610668800,"y":39158.47},{"x":1610755200,"y":36828.52},{"x":1610841600,"y":36065.2},{"x":1610928000,"y":35793.01},{"x":1611014400,"y":36632.35},{"x":1611100800,"y":36020.13},{"x":1611187200,"y":35538.98},{"x":1611273600,"y":30797.88},{"x":1611360000,"y":33002.38},{"x":1611446400,"y":32099.74},{"x":1611532800,"y":32276.84},{"x":1611619200,"y":32243.26},{"x":1611705600,"y":32541.8},{"x":1611792000,"y":30419.17},{"x":1611878400,"y":33403.17},{"x":1611964800,"y":34314.26},{"x":1612051200,"y":34318.1},{"x":1612137600,"y":33136.46},{"x":1612224000,"y":33522.9},{"x":1612310400,"y":35529.66},{"x":1612396800,"y":37676.25},{"x":1612483200,"y":37002.09},{"x":1612569600,"y":38278.61},{"x":1612656000,"y":39323.26},{"x":1612742400,"y":38928.1},{"x":1612828800,"y":46364.3},{"x":1612915200,"y":46589.58},{"x":1613001600,"y":44878.17},{"x":1613088000,"y":48013.38},{"x":1613174400,"y":47471.4},{"x":1613260800,"y":47185.19},{"x":1613347200,"y":48720.37},{"x":1613433600,"y":47951.85},{"x":1613520000,"y":49160.1},{"x":1613606400,"y":52118.23},{"x":1613692800,"y":51608.15},{"x":1613779200,"y":55916.5},{"x":1613865600,"y":56001.2},{"x":1613952000,"y":57487.86},{"x":1614038400,"y":54123.4},{"x":1614124800,"y":48880.43},{"x":1614211200,"y":50624.84},{"x":1614297600,"y":46800.42},{"x":1614384000,"y":46340.31},{"x":1614470400,"y":46155.87},{"x":1614556800,"y":45113.92},{"x":1614643200,"y":49618.43},{"x":1614729600,"y":48356.04},{"x":1614816000,"y":50477.7},{"x":1614902400,"y":48448.91},{"x":1614988800,"y":48861.38},{"x":1615075200,"y":48881.59},{"x":1615161600,"y":51169.7},{"x":1615248000,"y":52299.33},{"x":1615334400,"y":54881.52},{"x":1615420800,"y":55997.23},{"x":1615507200,"y":57764.0},{"x":1615593600,"y":57253.28},{"x":1615680000,"y":61258.73},{"x":1615766400,"y":59133.47},{"x":1615852800,"y":55754.72},{"x":1615939200,"y":56872.38},{"x":1616025600,"y":58913.0},{"x":1616112000,"y":57665.9},{"x":1616198400,"y":58075.1},{"x":1616284800,"y":58085.8},{"x":1616371200,"y":57411.17},{"x":1616457600,"y":54204.96},{"x":1616544000,"y":54477.46},{"x":1616630400,"y":52508.23},{"x":1616716800,"y":51415.92},{"x":1616803200,"y":55074.47},{"x":1616889600,"y":55863.93},{"x":1616976000,"y":55783.71},{"x":1617062400,"y":57627.67},{"x":1617148800,"y":58730.13},{"x":1617235200,"y":58735.25},{"x":1617321600,"y":58736.92},{"x":1617408000,"y":59031.32},{"x":1617494400,"y":57076.49},{"x":1617580800,"y":58206.55},{"x":1617667200,"y":59054.1},{"x":1617753600,"y":58020.46},{"x":1617840000,"y":55947.27},{"x":1617926400,"y":58048.59},{"x":1618012800,"y":58102.58},{"x":1618099200,"y":59774.0},{"x":1618185600,"y":59964.87},{"x":1618272000,"y":59834.74},{"x":1618358400,"y":63554.44},{"x":1618444800,"y":62969.12},{"x":1618531200,"y":63252.63},{"x":1618617600,"y":61455.98},{"x":1618704000,"y":60087.09},{"x":1618790400,"y":56251.48},{"x":1618876800,"y":55703.14},{"x":1618963200,"y":56507.91},{"x":1619049600,"y":53808.8},{"x":1619136000,"y":51731.71},{"x":1619222400,"y":51153.13},{"x":1619308800,"y":50110.53},{"x":1619395200,"y":49075.58},{"x":1619481600,"y":54056.64},{"x":1619568000,"y":55071.46},{"x":1619654400,"y":54884.1},{"x":1619740800,"y":53584.15},{"x":1619827200,"y":57796.62},{"x":1619913600,"y":57857.5},{"x":1620000000,"y":56610.46},{"x":1620086400,"y":57213.33},{"x":1620172800,"y":53241.72},{"x":1620259200,"y":57473.23},{"x":1620345600,"y":56428.16},{"x":1620432000,"y":57380.27},{"x":1620518400,"y":58928.81},{"x":1620604800,"y":58280.73},{"x":1620691200,"y":55883.5},{"x":1620777600,"y":56750.0},{"x":1620864000,"y":49007.09},{"x":1620950400,"y":49702.27},{"x":1621036800,"y":49922.52},{"x":1621123200,"y":46736.58},{"x":1621209600,"y":46441.64},{"x":1621296000,"y":43596.24},{"x":1621382400,"y":42912.19},{"x":1621468800,"y":36964.27},{"x":1621555200,"y":40784.32},{"x":1621641600,"y":37280.35},{"x":1621728000,"y":37528.3},{"x":1621814400,"y":34754.54},{"x":1621900800,"y":38728.59},{"x":1621987200,"y":38410.5},{"x":1622073600,"y":39266.04},{"x":1622160000,"y":38445.29},{"x":1622246400,"y":35689.62},{"x":1622332800,"y":34647.67},{"x":1622419200,"y":35684.59},{"x":1622505600,"y":37310.54},{"x":1622592000,"y":36662.64},{"x":1622678400,"y":37585.24},{"x":1622764800,"y":39188.59},{"x":1622851200,"y":36885.51},{"x":1622937600,"y":35530.38},{"x":1623024000,"y":35816.17},{"x":1623110400,"y":33514.87},{"x":1623196800,"y":33450.19},{"x":1623283200,"y":37338.36},{"x":1623369600,"y":36704.57},{"x":1623456000,"y":37313.18},{"x":1623542400,"y":35494.9},{"x":1623628800,"y":39066.82},{"x":1623715200,"y":40525.8},{"x":1623801600,"y":40188.56},{"x":1623888000,"y":38324.87},{"x":1623974400,"y":38068.04},{"x":1624060800,"y":35729.82},{"x":1624147200,"y":35524.17},{"x":1624233600,"y":35592.35},{"x":1624320000,"y":31686.55},{"x":1624406400,"y":32447.59},{"x":1624492800,"y":33674.66},{"x":1624579200,"y":34639.38},{"x":1624665600,"y":31640.58},{"x":1624752000,"y":32160.91},{"x":1624838400,"y":34644.45},{"x":1624924800,"y":34456.67},{"x":1625011200,"y":35847.7},{"x":1625097600,"y":35047.36},{"x":1625184000,"y":33536.88},{"x":1625270400,"y":33856.86},{"x":1625356800,"y":34688.98},{"x":1625443200,"y":35309.3},{"x":1625529600,"y":33747.97},{"x":1625616000,"y":34211.01},{"x":1625702400,"y":33839.04},{"x":1625788800,"y":32877.41},{"x":1625875200,"y":33818.52},{"x":1625961600,"y":33515.57},{"x":1626048000,"y":34227.64},{"x":1626134400,"y":33158.25},{"x":1626220800,"y":32686.56},{"x":1626307200,"y":32814.61},{"x":1626393600,"y":31738.59},{"x":1626480000,"y":31421.25},{"x":1626566400,"y":31520.66},{"x":1626652800,"y":31783.49},{"x":1626739200,"y":30815.94},{"x":1626825600,"y":29790.24},{"x":1626912000,"y":32118.06},{"x":1626998400,"y":32297.89},{"x":1627084800,"y":33581.63},{"x":1627171200,"y":34279.34},{"x":1627257600,"y":35365.2},{"x":1627344000,"y":37318.14},{"x":1627430400,"y":39405.95},{"x":1627516800,"y":40002.53},{"x":1627603200,"y":40005.93},{"x":1627689600,"y":42214.15},{"x":1627776000,"y":41659.06},{"x":1627862400,"y":40000.46},{"x":1627948800,"y":39193.94},{"x":1628035200,"y":38138.0},{"x":1628121600,"y":39750.14},{"x":1628208000,"y":40882.0},{"x":1628294400,"y":42825.95},{"x":1628380800,"y":44634.13},{"x":1628467200,"y":43816.14},{"x":1628553600,"y":46333.46},{"x":1628640000,"y":45608.37},{"x":1628726400,"y":45611.46},{"x":1628812800,"y":44417.78},{"x":1628899200,"y":47833.98},{"x":1628985600,"y":47112.19},{"x":1629072000,"y":47056.41},{"x":1629158400,"y":45982.55},{"x":1629244800,"y":44648.57},{"x":1629331200,"y":44777.86},{"x":1629417600,"y":46734.65}],
    }),
  });
  /* return new ServerData<Chart.RootObject>({
    fetch: () =>
      fetch(
        "https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json"
      ).then((result) => result.json() as Promise<Chart.RootObject>),
  }); */
}
