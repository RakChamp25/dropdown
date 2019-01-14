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
        },
        setArray( ListDropdown ){
            this.send("showDrop");
            this.set('listObj',ListDropdown);
            this.set('listData',ListDropdown);
            //this.$('#filterDrop').focus();    
        },
        setHeadVal(list){
            this.set('headVal',list);
            this.send("hideDrop");
        },
        filterByValue(){
           let dummy = [];
           for(let i=0 ; i < this.get('listObj').length ; i++ )
           {
                if( this.listObj[i].name.toLowerCase().includes(this.get('filterVal') )){
                    dummy.push(this.get('listObj')[i]);
                } 
           }
           if( this.get('filterVal')==='' ){
             this.set('listObj',this.get('listData'));
           }
           else{
            this.set('listObj',dummy);
           }
            
        }

    }
});
