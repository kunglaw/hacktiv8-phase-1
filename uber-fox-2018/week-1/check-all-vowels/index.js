function checkAllVowels(arr)
{
    let vowel = "AIUEO";
    let result = 0;
    

    for(i = 0; i < arr.length; i++) // baris 
    {
        for(m = 0; m < arr.length; m++){ // kolom 
            // huruf index pertama / mulai
            let isAllVowel = true;

            // ambil 2 kesamping , ambil 2 kebawah 
            // baris dulu 
            for(j = m; j < m+1; j++)
            {
                
                // kolom 
                for(k = m; k < m+1; k++)
                {
                
                    for(l = 0; l < arr.length; l++)
                    {

                        if(arr[j][k] !== vowel[l])
                        {
                            isAllVowel = false;
                            //break;
                        }
                    }
                }
                
                
            }

            console.log(" char : ", arr[i][k])
            if(isAllVowel === true)
            {
                result++;
            }

        }
        
    }

    return result;
}

console.log(checkAllVowels([
    ["A","E","R","F","U"],
    ["O","U","I","T","L"],
    ["P","E","U","G","U"],
]))