import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
    ],
    monster:  {
        name : "monster",
        pv: 800,
        pvMax: 800,
        mana: 25,
    } 

}
export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {

            
            
            // TODO : Compléter ce reducer afin de modifier le state : les
            // points de vie du monstre doivent baisser en fonction de la force de frappe
            // fournie dans le payload de l’action
            }
    },
})
export default fightSlice.reducer