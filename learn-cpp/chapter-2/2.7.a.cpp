#include <iostream>

// forward declaration
int getInteger(); 

int main()
{
  int x{ getInteger() };
  int y{ getInteger() };

  std::cout << x << " + " << y << " is " << x + y << "\n";
  return 0;
}

// to compile use $g++ 2.7.a.cpp 2.7.b.cpp -o 27a
// tried 2.7.a on output but doesn't seem to work