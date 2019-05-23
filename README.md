# SnapAway Introduction:

Chrome extension to automatically skip YouTube videos

# Motivation

Hate having to click on the skip button.

# API Reference

Uses MutationObserver Web API to detect changes to the DOM. The content script waits for the DOM to fully load and when a mutation/change is detected by the MutationObserver API, the script checks for the skip button. If the skip button is found in the DOM, we trigger a click.
