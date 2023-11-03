#include <iostream>

int main()
{
  int x{ 0 };
  int y{ 0 };
  std::cout << "Enter a number \n";
  std::cin >> x;
  std::cout << "Enter another number \n";
  std::cin >> y;
  std::cout << x << " + " << y << " is " << x + y << "\n";
  std::cout << x << " - " << y << " is " << x - y;
  return 0;
}