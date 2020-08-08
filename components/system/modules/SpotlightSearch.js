import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/components/system/svg";
import * as Strings from "~/common/strings";

import { css } from "@emotion/react";
import { InputMenu } from "~/components/system/components/InputMenu";
import { GlobalModal } from "~/components/system/components/GlobalModal";
import { dispatchCustomEvent } from "~/common/custom-events";

const fileImg =
  "https://hub.textile.io/ipfs/bafkreihoi5c3tt4h3qx3gorbi7rrtekgactkpc2tfewwkahxqrxj2elvse";

let items = [
  {
    type: "user",
    id: "0cc3732d-d572-4ddd-900e-483dd1f4cbfb",
    username: "martina",
    photo:
      "https://hub.textile.io/ipfs/bafybeiguo2uhd63reslbqkkgsqedgeikhtuwn5lzqpnqzluoaa3rnkfcvi",
    name: "Martina Long",
  },
  {
    type: "slate",
    id: "c32b95ed-9472-4b01-acc2-0fb8303dc140",
    slatename: "Doggos",
    ownerId: "296e0692-209d-4bd3-b736-43cdb8e07a3f",
    username: "probablyharis",
    urls: [
      "https://hub.textile.io/ipfs/bafybeicuz5wrxonu7ud6eskrnshxb66ksg3ncu3ie776xuiydlxrkfuvmu",
      "https://hub.textile.io/ipfs/bafkreicb2lookm56omsfjwuwuziwftizmdsj4oneveuqiqlu6k5hc7j5nq",
      "https://hub.textile.io/ipfs/bafybeicp3x3poprnrsxhnqscsiuobxejxsbcsu2t4yhte6qmcofjvjqbn4",
    ],
    objectCount: 8,
  },
  {
    type: "image",
    name: "butter.jpg",
    id: "data-75384245-0a6e-4e53-938e-781895556265",
    ownerId: "9226b377-7aa9-40cb-a2c6-31ca67c0aa8f",
    username: "jim",
    url:
      "https://hub.textile.io/ipfs/bafybeidcn5ucp3mt5bl7vllkeo7uai24ja4ra5i7wctl22ffq2rev7z7au",
  },
  {
    type: "file",
    name: "seneca-on-the-shortness-of-life.pdf",
    id: "data-bc1bd1c8-5db4-448d-ab35-f4d4866b9fa2",
    ownerId: "b6fb6595-6010-4a4d-80cf-5b4e48bba9f4",
    username: "colin",
    url:
      "https://hub.textile.io/ipfs/bafkreic3w24qwy6nxvwzidwvdvmyfeyha5w2uyk6rycli5utdquvafgosq",
  },
  {
    type: "slate",
    id: "0ba6d7ab-7b1c-4420-bb42-4e66b82df099",
    slatename: "Landscapes",
    ownerId: "296e0692-209d-4bd3-b736-43cdb8e07a3f",
    username: "jason",
    urls: [
      "https://hub.textile.io/ipfs/bafybeihxn5non5wtt63e2vhk7am4xpmdh3fnmya2vx4jfk52t2jdqudztq",
      "https://hub.textile.io/ipfs/bafybeiddiv44vobree4in7n6gawqzlelpyqwoji6appb6dzpgxzrdonepq",
      "https://hub.textile.io/ipfs/bafkreih2mw66pmi4mvcxb32rhiyas7tohafaiez54lxvy652pdcfmgxrba",
    ],
    objectCount: 27,
  },
];

const STYLES_SEARCH_ICON = css`
  height: 16px;
  color: ${Constants.system.darkGrey};
`;

const STYLES_ICON_BOX = css`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const STYLES_MODAL = css`
  width: 95vw;
  max-width: 552px;
  height: 50vh;
  padding: 16px;
`;

const STYLES_INPUT_MENU = {
  border: "none",
  boxShadow: "none",
  borderRadius: "0px",
  maxWidth: "520px",
  height: "calc(50vh - 56px)",
  overflowY: "scroll",
};

const STYLES_USER_ENTRY_CONTAINER = css`
  display: grid;
  grid-template-columns: 72px auto 1fr;
  align-items: center;
`;

const STYLES_PROFILE_IMAGE = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const UserEntry = ({ item }) => {
  return (
    <div css={STYLES_ENTRY}>
      <div css={STYLES_USER_ENTRY_CONTAINER}>
        <div
          style={{ backgroundImage: `url(${item.photo})` }}
          css={STYLES_PROFILE_IMAGE}
        />
        <strong>{item.name}</strong>
        <a href={`/${item.username}`} style={{ justifySelf: "end" }}>
          @{item.username}
        </a>
      </div>
    </div>
  );
};

const STYLES_ENTRY = css`
  padding: 8px 0px;
`;

const STYLES_SLATE_ENTRY_CONTAINER = css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const STYLES_SLATE_IMAGES_CONTAINER = css`
  display: grid;
  grid-template-columns: repeat(3, 56px);
  margin: 8px 0px;
`;

const STYLES_SLATE_IMAGE = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 48px;
  width: 48px;
  border-radius: 4px;
`;

const SlateEntry = ({ item }) => {
  return (
    <div css={STYLES_ENTRY}>
      <div css={STYLES_SLATE_ENTRY_CONTAINER}>
        <div>{item.slatename}</div>
        <a href={`/${item.username}`} style={{ justifySelf: "end" }}>
          @{item.username}
        </a>
      </div>
      <div css={STYLES_SLATE_IMAGES_CONTAINER}>
        {item.urls.map((link) => (
          <div
            style={{ backgroundImage: `url(${link})` }}
            css={STYLES_SLATE_IMAGE}
          />
        ))}
      </div>
    </div>
  );
};

const FileEntry = ({ item }) => {
  return (
    <div css={STYLES_ENTRY}>
      <div css={STYLES_USER_ENTRY_CONTAINER}>
        <div
          style={{
            backgroundImage: `url(${
              item.type === "image" ? item.url : fileImg
            })`,
          }}
          css={STYLES_SLATE_IMAGE}
        />
        <div>{item.name}</div>
        <a href={`/${item.username}`} style={{ justifySelf: "end" }}>
          @{item.username}
        </a>
      </div>
    </div>
  );
};

class SpotlightSearchContent extends React.Component {
  state = {
    options: [],
    value: null,
    inputValue: "",
  };

  componentDidMount = () => {
    let options = [];
    for (let item of items) {
      if (item.type === "user") {
        options.push({
          value: `/${item.username}`,
          name: <UserEntry item={item} />,
        });
      } else if (item.type === "slate") {
        options.push({
          value: `/${item.username}/${item.slatename}`,
          name: <SlateEntry item={item} />,
        });
      } else if (item.type === "image" || item.type == "file") {
        options.push({
          value: `${item.url}`,
          name: <FileEntry item={item} />,
        });
      }
    }
    this.setState({ options });
  };

  _handleChange = (e) => {
    // window.location.href = e.target.value;
  };

  _handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value }, () => {
      let options = [];
      for (let item of items) {
        if (item.type === "user") {
          options.push({
            value: `/${item.username}`,
            name: <UserEntry item={item} />,
          });
        } else if (item.type === "slate") {
          options.push({
            value: `/${item.username}/${item.slatename}`,
            name: <SlateEntry item={item} />,
          });
        } else if (item.type === "image" || item.type == "file") {
          options.push({
            value: `${item.url}`,
            name: <FileEntry item={item} />,
          });
        }
      }
      this.setState({ options });
    });
  };

  render() {
    return (
      <div css={STYLES_MODAL}>
        <InputMenu
          full
          show
          search
          name="exampleThree"
          placeholder="Search slates and users"
          options={this.state.options}
          onChange={this._handleChange}
          value={this.state.value}
          onInputChange={this._handleInputChange}
          inputValue={this.state.inputValue}
          style={STYLES_INPUT_MENU}
          itemStyle={{ padding: "0px 8px" }}
        />
      </div>
    );
  }
}

export class SpotlightSearch extends React.Component {
  _handleCreate = (e) => {
    dispatchCustomEvent({
      name: "create-modal",
      detail: { modal: <SpotlightSearchContent /> },
    });
  };

  render() {
    return (
      <div css={STYLES_ICON_BOX} onClick={this._handleCreate}>
        <SVG.Search css={STYLES_SEARCH_ICON} />
      </div>
    );
  }
}