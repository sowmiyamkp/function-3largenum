let array=[4,5,10,90,20,22];
function numSmall(array,num)
{
	for(i=0;i<array.length;i++)
{
	      
	for(j=i+1;j<array.length;j++)
	{
		if(array[i]<array[j])
		{
		
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
		}
	}
}

console.log(array);
let small=array[num-1];
return small;

}
console.log("3nd large number number is"+numSmall(array,3));


