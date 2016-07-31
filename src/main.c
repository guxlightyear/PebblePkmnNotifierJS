#include <pebble.h>

Window *window;
TextLayer *text_layer;
int repeat_period_ms = 10 * 1000; // 10s. TODO make it configurable

static void set_text_in_screen(char* text) {
  text_layer_set_text(text_layer, text);
}

static void find_pokemons_callback(void *data) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "in find_pokemons_callback");
  set_text_in_screen("Finding Pokemons near you...");
  
  
  
  // register to execute again after the configured repeat period
  app_timer_register(repeat_period_ms, find_pokemons_callback, NULL);
}

void init() {
  window = window_create();
  text_layer = text_layer_create(GRect(0, 0, 144, 40));
  layer_add_child(window_get_root_layer(window), 
                  text_layer_get_layer(text_layer));
  window_stack_push(window, true);
  
  find_pokemons_callback(NULL);
}

void deinit() {
  text_layer_destroy(text_layer);
  window_destroy(window); 
}

int main() {
  init();
  app_event_loop();
  deinit();
  return 0;
}

