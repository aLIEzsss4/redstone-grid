import ds from 'downstream';

const images =
  [
    "https://latticexyz.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0857dec6-6364-4f79-87ea-ff7da1ce8868%2Fb346d747-9605-4810-83f2-dbffa9bb334d%2FSky_Strife_featured.png?table=block&id=6e1974fe-1caa-4f43-8a5d-fca1c742b4fe&spaceId=0857dec6-6364-4f79-87ea-ff7da1ce8868&width=2000&userId=&cache=v2",
    "https://github.com/latticexyz/skystrife-public/raw/main/packages/client/src/public/assets/background.png"

  ]


let selectedImg = Math.floor(Math.random() * images.length) + 1;

const play = () => {
    selectedImg = (selectedImg + 1) % images.length;
  // window.open('https://play.skystrife.com/','_blank')

  // console.log(1111)

}

const checkIsPlay = () => {

}

export default async function update(state) {
  const skyStrifeBillboard = state.world?.buildings.find(
    (b) => b.kind?.name?.value == "SkyStrife",
  );

  if (!skyStrifeBillboard) {
    return;
  }

  const map = [
    {
      type: "building",
      key: "image",
      id: `${skyStrifeBillboard.id}`,
      value: images[selectedImg],
    },
  ];

  const buttons = [
    {
      text: `play now`,
      type: 'action',
      action: play,
      disabled: false,
    },
  ];

  return {
    version: 1,
    map: map,
    components: [
      {
        id: 'SkyStrife',
        type: 'building',
        content: [
          {
            id: 'default',
            type: 'inline',
            html: `
                            <h3>Sky Strife</h3>
                            <img src="${images[selectedImg]}" alt="Current Billboard Image">
                            
                        `,
            buttons: buttons,
          },
        ],
      },
    ],
  };
}

// the source for this code is on github where you can find other example buildings:
// https://github.com/playmint/ds/tree/main/contracts/src/example-plugins