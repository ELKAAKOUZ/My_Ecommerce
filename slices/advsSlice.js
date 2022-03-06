import {createSlice} from "@reduxjs/toolkit";
export const advsSlice =createSlice({
     name:"advertisments",
     initialState:{
         showEditForm:true,
         advsItems:[],
     },
     reducers:{
        toggle:(state,action)=>{
            state.showEditForm=!state.showEditForm
        },
        addToItems:(state,action)=>{
            const addedItem=action.payload;
            state.advsItems=[...state.advsItems,addedItem];
        },
        removeFromItems:(state,action)=>{
            const {id}=action.payload;
            const newlist=state.advsItems.filter((item) => (
                item.id !== id
                
            ));
            console.log(newlist)
            state.advsItems=newlist
        },
        editItem:(state,action)=>{
            const editedItem =action.payload;
            const existingItem=state.advsItems.find((item=>item.id === editedItem.id));
            if(existingItem){
                existingItem.image=editedItem.image;
                existingItem.video=editedItem.video;
                existingItem.from_time=editedItem.from_time;
                existingItem.to_time=editedItem.to_time;
                console.log(existingItem);
            }
            
        }
     }

})
export const selectItems=(state)=>state.advertisments.advsItems;
export const {toggle,addToItems,removeFromItems,editItem}=advsSlice.actions;
export default advsSlice.reducer;