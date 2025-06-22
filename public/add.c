#include <emscripten/emscripten.h>

// Expose this function to JavaScript
EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}
