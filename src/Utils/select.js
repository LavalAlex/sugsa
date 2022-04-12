export default function optionSelect(allRoles){
    let options =[]
        if(allRoles[0]){
        for(var i =0; i<allRoles.length; i++){
            let mayus = allRoles[i].name.charAt(0).toUpperCase() + allRoles[i].name.slice(1)
            options.push({value:allRoles[i].name, label:mayus})        
        }
    }

    return options
}