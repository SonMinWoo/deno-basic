import {bgBlue, red, bold, italic} from "https://deno.land/std/fmt/colors.ts";

if (import.meta.main) {
    console.log(bgBlue(italic(red(bold("Hello world!")))));
}