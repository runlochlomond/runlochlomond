{ pkgs ? import <nixpkgs> {} }:

let
  homeDirectory = builtins.getEnv "HOME";
in
  pkgs.mkShell rec {
    name = "run-loch-lomond-10k";
    buildInputs = [
      pkgs.ruby.devEnv
      pkgs.imagemagick
      # Required by native extensions of nokogiri.
      pkgs.zlib.dev
    ];
    # Need to set this so that bundle install doesn't try to write to the /nix/store.
    GEM_HOME = "${homeDirectory}/.gem/ruby/${pkgs.ruby.majorVersion}.${pkgs.ruby.minorVersion}.0/";
  }
