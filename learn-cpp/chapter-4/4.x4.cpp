#include "constants.h" // symbolic constant?
#include <iostream>

float ballHeightAfterXSeconds(int seconds)
{
  // return GRAVITY * (seconds * seconds) / 2;
  return (gravity * (seconds * seconds)) / 2.0;
}

float zeroCheck(float curHeight)
{
  if (curHeight < 0)
  {
    return 0;
  }

  return curHeight;
}

// this is super ugly, don't care just filed my taxes, burnt
// int main()
// {
//   int towerHeight{}; // meters
//   int curHeight{};
//   std::cout << "Enter the tower height in meters \n";
//   std::cin >> towerHeight;
  
//   curHeight = towerHeight - ballHeightAfterXSeconds(0);
//   std::cout << "At 0 seconds, the ball is at height: " << curHeight << " meters \n";

//   curHeight = curHeight - ballHeightAfterXSeconds(1);
//   if (zeroCheck(curHeight) == 0)
//   {
//     std::cout << "At 1 seconds, the ball is on the ground. \n";
//   }
//   else
//   {
//     std::cout << "At 1 seconds, the ball is at height: " << zeroCheck(curHeight) << " meters \n";
//   }

//   curHeight = curHeight - ballHeightAfterXSeconds(2);
//   if (zeroCheck(curHeight) == 0)
//   {
//     std::cout << "At 2 seconds, the ball is on the ground. \n";
//   }
//   else
//   {
//     std::cout << "At 2 seconds, the ball is at height: " << zeroCheck(curHeight) << " meters \n";
//   }

//   curHeight = curHeight - ballHeightAfterXSeconds(3);
//   if (zeroCheck(curHeight) == 0)
//   {
//     std::cout << "At 3 seconds, the ball is on the ground. \n";
//   }
//   else
//   {
//     std::cout << "At 3 seconds, the ball is at height: " << zeroCheck(curHeight) << " meters \n";
//   }

//   curHeight = curHeight - ballHeightAfterXSeconds(4);
//   if (zeroCheck(curHeight) == 0)
//   {
//     std::cout << "At 4 seconds, the ball is on the ground. \n";
//   }
//   else
//   {
//     std::cout << "At 4 seconds, the ball is at height: " << zeroCheck(curHeight) << " meters \n";
//   }

//   curHeight = curHeight - ballHeightAfterXSeconds(5);
//   if (zeroCheck(curHeight) == 0)
//   {
//     std::cout << "At 4 seconds, the ball is on the ground. \n";
//   }
//   else
//   {
//     std::cout << "At 4 seconds, the ball is at height: " << zeroCheck(curHeight) << " meters \n";
//   }
// }

// solution comparison
// they used double, I did at first too but values didn't change
// my formula is wrong, theirs: (gravity * (seconds * seconds)) / 2.0
// actually math is the same, but their implementation is way cleaner I just wanted to get it done

#include "constants.h"
 
#include <iostream>
 
// gets height from user and returns it
double getTowerHeight()
{
	std::cout << "Enter the height of the tower in meters: ";
	double towerHeight{};
	std::cin >> towerHeight;
	return towerHeight;
}
 
// Returns height from ground after "seconds" seconds
double calculateHeight(double towerHeight, int seconds)
{
	// Using formula: [ s = u * t + (a * t^2) / 2 ], here u(initial velocity) = 0
	double distanceFallen { (gravity * (seconds * seconds)) / 2.0 };
	double currentHeight { towerHeight - distanceFallen };
 
	return currentHeight;
}
 
// Prints height every second till ball has reached the ground
void printHeight(double height, int seconds)
{
	if (height > 0.0)
		std::cout << "At " << seconds << " seconds, the ball is at height: " << height << " meters\n";
	else
		std::cout << "At " << seconds << " seconds, the ball is on the ground.\n";
}
 
void calculateAndPrintHeight(double towerHeight, int seconds)
{
	double height { calculateHeight(towerHeight, seconds) };
	printHeight(height, seconds);
}
 
int main()
{
	const double towerHeight { getTowerHeight() };
 
	calculateAndPrintHeight(towerHeight, 0);
	calculateAndPrintHeight(towerHeight, 1);
	calculateAndPrintHeight(towerHeight, 2);
	calculateAndPrintHeight(towerHeight, 3);
	calculateAndPrintHeight(towerHeight, 4);
	calculateAndPrintHeight(towerHeight, 5);
 
	return 0;
}