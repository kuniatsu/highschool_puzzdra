var selectDrop = null;
        var moveDrop = null;
        var tmp = null;
        var tmp2 = null;
        $(function(){
            $('td').click(function(){
                console.log("click");
                if(selectDrop == null){
                    selectDrop = this;    
                }



                
            });

            $('td').mouseover(function(e){   
                // console.log("move"); 
                if(selectDrop!=null && tmp2 != e){
                    tmp2 = e;
                    moveDrop = this;     
                    tmp = e.currentTarget.innerHTML;
                //     // console.dir(tmp);
                    $('#'+moveDrop.id).html(selectDrop.innerHTML); 
                    $('#'+selectDrop.id).html(tmp); 
                    selectDrop = this;
                    
                }
            });

        });





//とりあえず、動くようにする。
