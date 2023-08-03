export const sort = (data:object[], sort_by:string[]) => {

   return  data.sort((a,b)=>{
        if (!sort_by.length) return 0;
        for (let i in sort_by) {
            const sort = sort_by[i];
            if (a[sort] > b[sort] || a[sort] < b[sort]) {
                return (a[sort] > b[sort]) ? 1 : -1;
            }
        }
        return 0;
    })
}