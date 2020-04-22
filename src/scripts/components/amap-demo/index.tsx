import React, { Component } from 'react';
import { Map, Polyline, Marker } from 'react-amap';
import { Radio, Button } from 'antd';

import './index.less';

const ZoomCtrl = props => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '10px'
  };
  const zoomIn = () => map.zoomIn();
  const zoomOut = () => map.zoomOut();

  return (
    <div style={style}>
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={zoomOut}>zoom out</button>
    </div>
  );
};

const PlayCtrl = props => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  return (
    <div className="play-ctrl">
      <Button type="primary" className="u-play opt-btn">
        <i className="u-play" />
      </Button>

      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">快</Radio.Button>
        <Radio.Button value="b">中</Radio.Button>
        <Radio.Button value="c">慢</Radio.Button>
      </Radio.Group>
      <Button type="primary" className="u-stop opt-btn">
        <i className="u-stop" />
      </Button>
    </div>
  );
};
const randomPath = () => ({
  longitude: (117.387371 + Math.random() * 0.045).toFixed(7),
  latitude: (39.159405 - Math.random() * 0.054).toFixed(7)
});
const data = [
  {
    longitude: 117.318327,
    latitude: 39.206469
  },
  {
    longitude: 117.37425726996528,
    latitude: 39.17973063151042
  },
  {
    longitude: 117.37425726996528,
    latitude: 39.17973063151042
  },
  {
    longitude: 117.37424818155728,
    latitude: 39.17976656536731
  },
  {
    longitude: 117.37425569581754,
    latitude: 39.179799627287736
  },
  {
    longitude: 117.37427383362748,
    latitude: 39.17981364039519
  },
  {
    longitude: 117.37430480907534,
    latitude: 39.17978755146397
  },
  {
    longitude: 117.37433495350763,
    latitude: 39.17971555068485
  },
  {
    longitude: 117.37442593987143,
    latitude: 39.179602116843796
  },
  {
    longitude: 117.37460173769692,
    latitude: 39.179480854118005
  },
  {
    longitude: 117.37480746972213,
    latitude: 39.17933955625775
  },
  {
    longitude: 117.37502091434573,
    latitude: 39.17919616004998
  },
  {
    longitude: 117.37520065724753,
    latitude: 39.17905626247792
  },
  {
    longitude: 117.37528656008507,
    latitude: 39.17898438643849
  },
  {
    longitude: 117.37528656008507,
    latitude: 39.17898438643849
  },
  {
    longitude: 117.37528656008507,
    latitude: 39.17898438643849
  },
  {
    longitude: 117.37528656008507,
    latitude: 39.17898438643849
  },
  {
    longitude: 117.37528656008507,
    latitude: 39.17898438643849
  },
  {
    longitude: 117.37528700086806,
    latitude: 39.17898763020833
  },
  {
    longitude: 117.3752822976871,
    latitude: 39.178949081293766
  },
  {
    longitude: 117.37532480159476,
    latitude: 39.17889377452328
  },
  {
    longitude: 117.37548709621143,
    latitude: 39.178808894334615
  },
  {
    longitude: 117.37570384478785,
    latitude: 39.178642484089124
  },
  {
    longitude: 117.37599942389363,
    latitude: 39.17846542931041
  },
  {
    longitude: 117.37629575875224,
    latitude: 39.1782913251081
  },
  {
    longitude: 117.37653588714764,
    latitude: 39.178139281614534
  },
  {
    longitude: 117.37672247691796,
    latitude: 39.17800472310311
  },
  {
    longitude: 117.37687634646203,
    latitude: 39.17791293653742
  },
  {
    longitude: 117.3769843625339,
    latitude: 39.17783391555502
  },
  {
    longitude: 117.3771010123145,
    latitude: 39.177746059831385
  },
  {
    longitude: 117.37725413296099,
    latitude: 39.17761198738686
  },
  {
    longitude: 117.37749265245586,
    latitude: 39.17742881975132
  },
  {
    longitude: 117.3777568010092,
    latitude: 39.177222077179465
  },
  {
    longitude: 117.37799270668421,
    latitude: 39.17705487474953
  },
  {
    longitude: 117.37813908827809,
    latitude: 39.17692823052762
  },
  {
    longitude: 117.37823726691403,
    latitude: 39.17682576818702
  },
  {
    longitude: 117.37829922157279,
    latitude: 39.1767324686649
  },
  {
    longitude: 117.37837654488752,
    latitude: 39.17666798343648
  },
  {
    longitude: 117.37841778566491,
    latitude: 39.17662862271657
  },
  {
    longitude: 117.37841778566491,
    latitude: 39.17662862271657
  },
  {
    longitude: 117.37841778566491,
    latitude: 39.17662862271657
  },
  {
    longitude: 117.37841778566491,
    latitude: 39.17662862271657
  },
  {
    longitude: 117.37843041485291,
    latitude: 39.17661543144865
  },
  {
    longitude: 117.37846664523498,
    latitude: 39.17656627946685
  },
  {
    longitude: 117.37854474434891,
    latitude: 39.17648541048608
  },
  {
    longitude: 117.37866450152771,
    latitude: 39.176396521615914
  },
  {
    longitude: 117.37879412436816,
    latitude: 39.176306708681324
  },
  {
    longitude: 117.37892835320771,
    latitude: 39.17619766187712
  },
  {
    longitude: 117.37909227930537,
    latitude: 39.1760776389116
  },
  {
    longitude: 117.37925899332157,
    latitude: 39.1759658705035
  },
  {
    longitude: 117.37941362849622,
    latitude: 39.17586085393771
  },
  {
    longitude: 117.3795494879003,
    latitude: 39.17576991567243
  },
  {
    longitude: 117.37966550183224,
    latitude: 39.17567675333758
  },
  {
    longitude: 117.37978077979437,
    latitude: 39.175589377020344
  },
  {
    longitude: 117.37994072622564,
    latitude: 39.17548454449209
  },
  {
    longitude: 117.38013260037293,
    latitude: 39.17533512045656
  },
  {
    longitude: 117.38032200436629,
    latitude: 39.17519718305254
  },
  {
    longitude: 117.38046728776463,
    latitude: 39.175086990731835
  },
  {
    longitude: 117.38057552221152,
    latitude: 39.1750014277235
  },
  {
    longitude: 117.38068111041503,
    latitude: 39.17491375694069
  },
  {
    longitude: 117.38081043854123,
    latitude: 39.17481073514311
  },
  {
    longitude: 117.38095569850034,
    latitude: 39.17470041330184
  },
  {
    longitude: 117.38110652031416,
    latitude: 39.17460198963194
  },
  {
    longitude: 117.38123745136181,
    latitude: 39.1745007245783
  },
  {
    longitude: 117.38139819538172,
    latitude: 39.17438278210778
  },
  {
    longitude: 117.38161879463159,
    latitude: 39.17423847355566
  },
  {
    longitude: 117.38190241731348,
    latitude: 39.17403562863818
  },
  {
    longitude: 117.38222064735413,
    latitude: 39.173788818068374
  },
  {
    longitude: 117.38257007289924,
    latitude: 39.17349582217652
  },
  {
    longitude: 117.38296080178625,
    latitude: 39.173211965193524
  },
  {
    longitude: 117.38330973871884,
    latitude: 39.17292634701934
  },
  {
    longitude: 117.38363518144504,
    latitude: 39.17267204356397
  },
  {
    longitude: 117.38395828388701,
    latitude: 39.17242819133623
  },
  {
    longitude: 117.38428114711489,
    latitude: 39.17217832458545
  },
  {
    longitude: 117.38459666883868,
    latitude: 39.17193062994687
  },
  {
    longitude: 117.38488749224133,
    latitude: 39.171704607440496
  },
  {
    longitude: 117.3851332633988,
    latitude: 39.17150469319804
  },
  {
    longitude: 117.38532716947687,
    latitude: 39.171342268572836
  },
  {
    longitude: 117.38546779545234,
    latitude: 39.17122213070806
  },
  {
    longitude: 117.3855236769541,
    latitude: 39.17116747270576
  },
  {
    longitude: 117.38550076740205,
    latitude: 39.17117694977575
  },
  {
    longitude: 117.38548759043758,
    latitude: 39.171186257670875
  },
  {
    longitude: 117.38548759043758,
    latitude: 39.171186257670875
  },
  {
    longitude: 117.38548759043758,
    latitude: 39.171186257670875
  },
  {
    longitude: 117.38548759043758,
    latitude: 39.171186257670875
  },
  {
    longitude: 117.38548759043758,
    latitude: 39.171186257670875
  },
  {
    longitude: 117.3854806857639,
    latitude: 39.17118869357639
  },
  {
    longitude: 117.3854806857639,
    latitude: 39.17118869357639
  },
  {
    longitude: 117.3854806857639,
    latitude: 39.17118869357639
  },
  {
    longitude: 117.3854806857639,
    latitude: 39.17118869357639
  },
  {
    longitude: 117.38550150596923,
    latitude: 39.17116811868663
  },
  {
    longitude: 117.38554307861351,
    latitude: 39.17112362561893
  },
  {
    longitude: 117.38561119029183,
    latitude: 39.17106828711957
  },
  {
    longitude: 117.38568671873402,
    latitude: 39.17100574869868
  },
  {
    longitude: 117.38578733043515,
    latitude: 39.1709148812659
  },
  {
    longitude: 117.38595639621947,
    latitude: 39.17080003716951
  },
  {
    longitude: 117.3861853809984,
    latitude: 39.17062368506115
  },
  {
    longitude: 117.38645341212175,
    latitude: 39.17040204349174
  },
  {
    longitude: 117.38674214473225,
    latitude: 39.17016963831722
  },
  {
    longitude: 117.3869988226681,
    latitude: 39.16993119605648
  },
  {
    longitude: 117.38719749311386,
    latitude: 39.16964814904242
  },
  {
    longitude: 117.38731759270972,
    latitude: 39.169343015342456
  },
  {
    longitude: 117.38739278695084,
    latitude: 39.169098807760484
  },
  {
    longitude: 117.3874418705883,
    latitude: 39.16889487854699
  },
  {
    longitude: 117.38741429439742,
    latitude: 39.16861180585672
  },
  {
    longitude: 117.38742315222979,
    latitude: 39.168317962190514
  },
  {
    longitude: 117.3874656032913,
    latitude: 39.168039362454905
  },
  {
    longitude: 117.38751233832184,
    latitude: 39.16777696414561
  },
  {
    longitude: 117.38754450965509,
    latitude: 39.16751063015342
  },
  {
    longitude: 117.3875705087693,
    latitude: 39.16723798466102
  },
  {
    longitude: 117.38759870210666,
    latitude: 39.1669629856771
  },
  {
    longitude: 117.38763669529659,
    latitude: 39.16670542034404
  },
  {
    longitude: 117.38767079750752,
    latitude: 39.166467745047655
  },
  {
    longitude: 117.3877112177855,
    latitude: 39.1662523502923
  },
  {
    longitude: 117.38774009385088,
    latitude: 39.166084090618725
  },
  {
    longitude: 117.3877529962236,
    latitude: 39.16599199525988
  },
  {
    longitude: 117.38774379369202,
    latitude: 39.16596450206342
  },
  {
    longitude: 117.3877357369587,
    latitude: 39.16595354262787
  },
  {
    longitude: 117.3877357369587,
    latitude: 39.16595354262787
  },
  {
    longitude: 117.3877357369587,
    latitude: 39.16595354262787
  },
  {
    longitude: 117.38771249759795,
    latitude: 39.16592900503251
  },
  {
    longitude: 117.38771076336049,
    latitude: 39.165872904163514
  },
  {
    longitude: 117.38771840889072,
    latitude: 39.165776471617384
  },
  {
    longitude: 117.38773035498987,
    latitude: 39.16565956994412
  },
  {
    longitude: 117.38775876788401,
    latitude: 39.16549988550367
  },
  {
    longitude: 117.38780161391814,
    latitude: 39.16527907323793
  },
  {
    longitude: 117.38784723342616,
    latitude: 39.16504881300446
  },
  {
    longitude: 117.38788905045676,
    latitude: 39.16483303321942
  },
  {
    longitude: 117.38790958336905,
    latitude: 39.1646388748584
  },
  {
    longitude: 117.38791755990356,
    latitude: 39.16444721385172
  },
  {
    longitude: 117.38791984503256,
    latitude: 39.16428183512867
  },
  {
    longitude: 117.38791632726544,
    latitude: 39.16416008016719
  },
  {
    longitude: 117.38786191762645,
    latitude: 39.16406859353981
  },
  {
    longitude: 117.38766437462581,
    latitude: 39.16398640834282
  },
  {
    longitude: 117.38735806091276,
    latitude: 39.163959452069584
  },
  {
    longitude: 117.38697892958007,
    latitude: 39.16393878856939
  },
  {
    longitude: 117.38658020713738,
    latitude: 39.16391261993722
  },
  {
    longitude: 117.38618748757156,
    latitude: 39.163886764874206
  },
  {
    longitude: 117.38587707229523,
    latitude: 39.16386459794104
  },
  {
    longitude: 117.38569439366087,
    latitude: 39.16383642086009
  },
  {
    longitude: 117.38558962012941,
    latitude: 39.16376588753356
  },
  {
    longitude: 117.38555917524529,
    latitude: 39.163613307568426
  },
  {
    longitude: 117.3855617971796,
    latitude: 39.16343048149771
  },
  {
    longitude: 117.38557067602343,
    latitude: 39.163320817353046
  },
  {
    longitude: 117.38557067602343,
    latitude: 39.163320817353046
  },
  {
    longitude: 117.38557681355422,
    latitude: 39.16333020083337
  },
  {
    longitude: 117.38558009012625,
    latitude: 39.16334093654944
  },
  {
    longitude: 117.38558009012625,
    latitude: 39.16334093654944
  },
  {
    longitude: 117.38558295782042,
    latitude: 39.16331304309724
  },
  {
    longitude: 117.38558873070768,
    latitude: 39.16323868093946
  },
  {
    longitude: 117.38559941314355,
    latitude: 39.163132139452216
  },
  {
    longitude: 117.38561816264752,
    latitude: 39.16300840621388
  },
  {
    longitude: 117.38561640840305,
    latitude: 39.16298366883717
  },
  {
    longitude: 117.3856135441848,
    latitude: 39.162951195298255
  },
  {
    longitude: 117.38561427278466,
    latitude: 39.16291059604598
  },
  {
    longitude: 117.38562576675098,
    latitude: 39.16284493207829
  },
  {
    longitude: 117.38563820488866,
    latitude: 39.16276630268167
  },
  {
    longitude: 117.38565686358923,
    latitude: 39.16269523873189
  },
  {
    longitude: 117.38568335751422,
    latitude: 39.16260205453555
  },
  {
    longitude: 117.38571703430371,
    latitude: 39.16248143536322
  },
  {
    longitude: 117.38575616099631,
    latitude: 39.162336226141996
  },
  {
    longitude: 117.38579175456393,
    latitude: 39.16218010677525
  },
  {
    longitude: 117.38580851413195,
    latitude: 39.162031231430696
  },
  {
    longitude: 117.38578813844403,
    latitude: 39.161867956112054
  },
  {
    longitude: 117.38573640381718,
    latitude: 39.16169223234818
  },
  {
    longitude: 117.38567012281078,
    latitude: 39.16153405686432
  },
  {
    longitude: 117.38564445490475,
    latitude: 39.16140298012469
  },
  {
    longitude: 117.3856781709779,
    latitude: 39.161306566195265
  },
  {
    longitude: 117.38576993780173,
    latitude: 39.161220795220174
  },
  {
    longitude: 117.38588870458538,
    latitude: 39.161161011055036
  },
  {
    longitude: 117.38606842295172,
    latitude: 39.16109004215739
  },
  {
    longitude: 117.386319688254,
    latitude: 39.16097981822401
  },
  {
    longitude: 117.38661574659389,
    latitude: 39.1608172284024
  },
  {
    longitude: 117.38692225597228,
    latitude: 39.160584194350626
  },
  {
    longitude: 117.38723240387068,
    latitude: 39.160299077477084
  },
  {
    longitude: 117.38756264377702,
    latitude: 39.15999181510954
  },
  {
    longitude: 117.38790139078932,
    latitude: 39.15968441658684
  },
  {
    longitude: 117.38823650915639,
    latitude: 39.15939053002476
  },
  {
    longitude: 117.3885615271024,
    latitude: 39.15910299127567
  },
  {
    longitude: 117.38886848293784,
    latitude: 39.15885114030817
  },
  {
    longitude: 117.38914339861111,
    latitude: 39.158641757455584
  },
  {
    longitude: 117.38937219369312,
    latitude: 39.15845556758899
  },
  {
    longitude: 117.38954654617427,
    latitude: 39.15832287540007
  },
  {
    longitude: 117.38965571630308,
    latitude: 39.158241700589066
  },
  {
    longitude: 117.38972783759598,
    latitude: 39.15818311689348
  },
  {
    longitude: 117.38978612156214,
    latitude: 39.15812641298756
  },
  {
    longitude: 117.38986547533659,
    latitude: 39.158058896977465
  },
  {
    longitude: 117.38996853492117,
    latitude: 39.157977208773154
  },
  {
    longitude: 117.39011706009394,
    latitude: 39.15791564977344
  },
  {
    longitude: 117.3902527076371,
    latitude: 39.15788470860178
  },
  {
    longitude: 117.39036802601129,
    latitude: 39.15787808570059
  },
  {
    longitude: 117.39043916863717,
    latitude: 39.1578767389286
  },
  {
    longitude: 117.39051272458752,
    latitude: 39.15788716544378
  },
  {
    longitude: 117.39063944954016,
    latitude: 39.15790165236345
  },
  {
    longitude: 117.39077793396835,
    latitude: 39.157928602629426
  },
  {
    longitude: 117.39094457915702,
    latitude: 39.15796631400321
  },
  {
    longitude: 117.39115816742913,
    latitude: 39.15802923550649
  },
  {
    longitude: 117.39136030210089,
    latitude: 39.158090028385686
  },
  {
    longitude: 117.39149803801143,
    latitude: 39.158151045627555
  },
  {
    longitude: 117.39152202361365,
    latitude: 39.15817775126769
  },
  {
    longitude: 117.3915296391473,
    latitude: 39.158205515502075
  },
  {
    longitude: 117.39152799643905,
    latitude: 39.15825579442306
  },
  {
    longitude: 117.39155294755932,
    latitude: 39.15829959690034
  },
  {
    longitude: 117.39160456906032,
    latitude: 39.15831141775082
  },
  {
    longitude: 117.39164314386868,
    latitude: 39.158314864586785
  },
  {
    longitude: 117.39164314386868,
    latitude: 39.158314864586785
  },
  {
    longitude: 117.39164314386868,
    latitude: 39.158314864586785
  },
  {
    longitude: 117.39164314386868,
    latitude: 39.158314864586785
  },
  {
    longitude: 117.39164314386868,
    latitude: 39.158314864586785
  },
  {
    longitude: 117.39164279513889,
    latitude: 39.158314615885416
  }
];

class AmapDemo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      draggable: true,
      path: data,
      centerPoint: this.getCenterPoint(),
      endPoint: this.getEndPoint(),
      startPoint: this.getStartPoint(),
      mapInstance: null
    };
    this.amapEvents = {
      created: mapInstance => {
        console.log(
          '高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：'
        );
        console.log(mapInstance.getZoom());
        this.setState({
          mapInstance
        });
      },
      complete: () => {
        this.state.mapInstance.setFitView();
      }
    };
    /* this.lineEvents = {
      created: (ins) => { console.log(ins) },
      show: () => { console.log('line show') },
      hide: () => { console.log('line hide') },
      click: () => { console.log('line clicked') },
    } */
  }
  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    });
  }

  toggleDraggable() {
    this.setState({
      draggable: !this.state.draggable
    });
  }

  changePath() {
    this.setState({
      path: Array(5)
        .fill(true)
        .map(randomPath)
    });
  }
  getEndPoint = () => {
    const length = data.length - 1;
    return data[length];
  };
  getStartPoint = () => {
    return data[0];
  };
  getCenterPoint = () => {
    let minLat: number = 360.0;
    let maxLat: number = -360.0;
    let minLon: number = 360.0;
    let maxLon: number = -360.0;
    data.map(item => {
      if (item.latitude < minLat) minLat = item.latitude;
      if (item.latitude > maxLat) maxLat = item.latitude;
      if (item.longitude < minLon) minLon = item.longitude;
      if (item.longitude > maxLon) maxLon = item.longitude;
    });
    const lat = (maxLat + minLat) / 2;
    const lon = (maxLon + minLon) / 2;
    const center = [lon, lat];
    return center;
  };

  render() {
    const plugins = [
      'Scale',
      'OverView',
      //'ControlBar', // v1.1.0 新增
      {
        name: 'ToolBar',
        options: {
          liteStyle: true,
          position: 'LT',
          visible: true, // 不设置该属性默认就是 true
          onCreated(ins) {
            console.log(ins);
          }
        }
      }
    ];
    return (
      <div className="amap-demo">
        <button
          onClick={() => {
            this.toggleVisible();
          }}
        >
          切换显示
        </button>
        <button
          onClick={() => {
            this.toggleDraggable();
          }}
        >
          切换拖拽
        </button>
        <button
          onClick={() => {
            this.changePath();
          }}
        >
          改变路径
        </button>
        <Map
          amapkey={'374649efc8c2ec7d3a757d9bef8de969'}
          version={`1.4.10`}
          viewMode="2D"
          events={this.amapEvents}
          center={this.state.centerPoint}
          plugins={plugins}
        >
          <Polyline
            path={this.state.path}
            visible={this.state.visible}
            draggable={this.state.draggable}
            style={{ strokeColor: '#009966' }}
          />
          <Marker position={this.state.startPoint}>
            <div className="start-icon" />
          </Marker>
          <Marker position={this.state.endPoint}>
            <div className="end-icon" />
          </Marker>

          {/*  <ZoomCtrl /> */}
          <PlayCtrl />
        </Map>
      </div>
    );
  }
}

export default AmapDemo;
