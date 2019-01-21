import Component from '@ember/component';

export default Component.extend({
    
    headVal: null,
    dropdownBool : false ,
    listObj : null ,
    filterVal : null ,
    listData : null ,
   
    actions:{
        showDrop(){
            this.set('dropdownBool',true);
        },
        hideDrop(){
            this.set('dropdownBool',false);
            this.set('filterVal','');
        },
        focusInput(){
            document.getElementById('filterDrop').focus();
        },
        async setArray( ListDropdown ){
            await this.send("showDrop");
            this.set('listObj',ListDropdown);
            this.set('listData',ListDropdown);
             this.send("focusInput");   
        },
        setHeadVal(list){
            this.set('headVal',list);
            this.send("hideDrop");
        },
        filterByValue(){ 
            
           if( this.get('filterVal')==='' ){
             this.set('listObj',this.get('listData'));
           }
           else{
            
            let dummy = [];
            for(let i=0 ; i < this.get('listData').length ; i++ )
            {
                 if( this.listData[i].name.toLowerCase().includes(this.get('filterVal').toLowerCase() )){
                     dummy.push(this.get('listData')[i]);
                 } 
            }
            this.set('listObj',dummy);
           }
        }

    }
});
