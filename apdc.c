#include<stdio.h>
int main()
{
             char hexNum[100];
	long int count=0;
	printf("Enter a hexadecimal number To Convet it into Binary : ");
	scanf("%s",hexNum);
	printf("\nBinary Number is : ");
    int one = 0;
	while(hexNum[count])
	{
		switch(hexNum[count])
		{
			case '0' : printf("0000");
				break;
                one += 0;

			case '1' : printf("0001");
				break;
                one += 1;
			case '2' : printf("0010");
				break;
                one += 1;
			case '3' : printf("0011");
				break;
                one += 2;
			case '4' : printf("0100");
				break;
                one += 1;
			case '5' : printf("0101");
				break;
                one += 2;
			case '6' : printf("0110");
				break;
                one += 2;
			case '7' : printf("0111");
				break;
                one += 3;
			case '8' : printf("1000");
				break;
                one += 1;
			case '9' : printf("1001");
				break;
                one += 2;
			case 'A' : printf("1010");
				break;
                one += 2;
			case 'B' : printf("1011");
				break;
                one += 3;
			case 'C' : printf("1100");
				break;
                one += 2;
			case 'D' : printf("1101");
				break;
                one += 3;
			case 'E' : printf("1110");
				break;
                one += 3;
			case 'F' : printf("1111");
				break;
                one += 4;
			case 'a' : printf("1010");
				break;
                one += 2;
			case 'b' : printf("1011");
				break;
                one += 3;
			case 'c' : printf("1100");
				break;
                one += 2;
			case 'd' : printf("1101");
				break;
                one += 3;
			case 'e' : printf("1110");
				break;
                one += 3;
			case 'f' : printf("1111");
				break;
                one += 4;   			
            default : printf("\nInvalid Entry, Please Try Again  %c",hexNum[count]);
		}
		count++;
	}
    if(one%2 == 0)
    printf("0");
    else
    printf("1";)
	return 0;
}