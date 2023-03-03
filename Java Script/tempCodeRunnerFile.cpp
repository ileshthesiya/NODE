// #include <iostream>
// using namespace std;

// class sum
// {

//     public:
//     int i,j=1,n,sum=1;
//     ilesh(){
//     cout<<"Enter Valau of Number:";
//     cin>>n;
    
//     for (i=1; i<n; i++)
//     {
//         j++;
//         sum=sum+j;
//     }
//     return sum;
//     }
    
// };

// int main()
// {
//     sum a;
//     int i=a.ilesh();
//     cout<<i;
// }

#include <stdio.h>
#include <conio.h>
#define n 5
int main()
{
    char i,j;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i==1 || j==(n/2)+1 || i==n)
            printf("* ");
            else 
            printf("  ");
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(j==1 || i==n)
            printf("* ");
            else 
            printf("  ");
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i==1 || j==1 || i==(n/2)+1 || i==n)
            printf("* ");
            else 
            printf("  ");
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i==1 || i==n || i==n/2+1 || (j==1 && i<n/2+2) || (j==n && i>n/2))
            printf("* ");
            else 
            printf("  ");
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(j==n || j==1 || i==(n/2+1) )
            printf("* ");
            else 
            printf("  ");
        }
        printf("\n");
    }



    // for(i=n/2;i<=n;i+=2)
    // {
    //     for(j=1;j<n-1;j+=2)
    //     {
    //         printf(" ");
    //     }
    //     for(j=1;j<=i;j++)
    //     {
    //         printf("*");
    //     }
    //     for(j=1;j<=n-1;j++)
    //     {
    //         printf(" ");
    //     }
    //     for
    // }
    // for(i=n;i>=1;i--)
    // {
    //     for(j=1;j<=n;j++)
    //     {
    //         printf("");
    //     }

    //     for(j=1;j<=(i*2)-1;j++)
    //     {
    //         printf("*");
    //     }
            
    //     printf("\n");
    // }
}