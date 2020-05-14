import Axios from "axios";

const mockData = [
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
  {
    id: "25",
    createdAt: "2020-05-14T14:08:50.283Z",
    name: "Saphira",
    type: "Blue",
    histories:
      "Saphira was the only bonded egg given to the riders from the mating of Iormûngr, a male dragon bound to a Dragon Rider, as well as Vervada, a wild female dragon. Both dragons perished during the Fall of the Dragon Riders. Saphira's sapphire-blue colored egg, along with two others (emerald green and ruby red) were found and taken by Galbatorix during the Fall. Galbatorix tried desperately to find a Rider for whom the eggs would hatch, but was unsuccessful. None of the dragons responded to the touch of anyone in the Broddring Empire. Dragons stay in their eggs until the rider they are bonded with comes in their vicinity. Then they hatch for them.\n\nLater in Galbatorix's reign, a former Rider known as Brom and a scholar named Jeod discovered a secret entrance into Urû'baen. The Varden appointed a thief, Hefring, to steal the eggs. However, he only took one egg (Saphira's egg) and he kept it, all the while, running from Brom. The egg was later taken from him by Morzan, who might have slain Hefring. Brom eventually tracked down and killed Morzan and Morzan's Dragon, thus recovering the egg for the Varden. The egg was then transported back and forth from the Varden to the kingdom of the elves Du Weldenvarden, in the hope that the Dragon would eventually hatch. The egg-courier was Arya, daughter of Islanzadí, the Elf queen. Unfortunately, the egg didn't hatch.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
  },
];

const initialState = {
  dragons: [],
  selectedDragon: null,
  dragonsStatus: "INACTIVE",
  dragonDetailsStatus: "INACTIVE",
};

//Action creator for getting the dragons
export const GetDragons = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_DRAGONS_START" });
    try {
      //Delay to simulate server delay

      const response = await Axios.get(
        "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
      );

      if (response.status === 200) {
        dispatch({ type: "GET_DRAGONS_SUCCESS", payload: response.data });
        if (response.data.length === 0) {
          dispatch({ type: "GET_DRAGONS_NO_DRAGONS" });
        }
      }
    } catch (err) {
      console.log(err);

      dispatch({ type: "GET_DRAGONS_SERVER_FAILURE" });
    }
  };
};

//Action creator for getting the dragon detauls
export const GetDragonDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_DRAGON_DETAILS_START" });
    try {
      //Delay to simulate server delay

      const response = await Axios.get(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      if (response.status === 200) {
        dispatch({ type: "GET_DRAGON_DETAILS_SUCCESS", payload: response.data });
        if (response.data.length === 0) {
          dispatch({ type: "GET_DRAGON_DETAILS_NO_DRAGONS" });
        }
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "GET_DRAGON_DETAILS_SERVER_FAILURE" });
    }
  };
};

function DragonReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DRAGONS_START":
      return {
        ...state,
        dragonsStatus: "LOADING",
      };
    case "GET_DRAGONS_SUCCESS":
      return {
        ...state,
        dragonsStatus: "SUCCESS",
        dragons: mockData, //action.payload,
      };
    case "GET_DRAGONS_NO_DRAGONS":
      return {
        ...state,
        dragonsStatus: "NO_DRAGONS",
      };
    case "GET_DRAGONS_SERVER_FAILURE":
      return {
        ...state,
        dragonsStatus: "SERVER_FAILURE",
      };
    case "SELECT_DRAGON":
      const dragon = state.dragons.find(
        ({ id }) => id.toString() === action.payload.toString()
      );
      if (dragon)
        return {
          ...state,
          selectedDragon: dragon,
        };
      else return { ...state };

      case "GET_DRAGON_DETAILS_START":
        return {
          ...state,
          dragonDetailsStatus: "LOADING",
        };
      case "GET_DRAGON_DETAILS_SUCCESS":
        return {
          ...state,
          dragonDetailsStatus: "SUCCESS",
        };
      case "GET_DRAGON_DETAILS_NO_DRAGONS":
        return {
          ...state,
          dragonDetailsStatus: "NO_INFO",
        };
      case "GET_DRAGON_DETAILS_SERVER_FAILURE":
        return {
          ...state,
          dragonDetailsStatus: "SERVER_FAILURE",
        };

    default:
      return state;
  }
}

export default DragonReducer;
